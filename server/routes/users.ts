/*=============================================== Users routes ===============================================*/

import { Router } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Fuse from "fuse.js"
import { passwordRegex, deleteDuplicates, slugify } from "ts-utils-julseb"

import { UserModel } from "../models/User.model"

import { SALT_ROUNDS, TOKEN_SECRET, jwtConfig, visibleArtists } from "../utils"
import type { SortType, UserRoleType, UserType } from "../types"

const router = Router()

// Get all users
router.get("/all-users", async (req, res, next) => {
    const { role, isApproved } = req.query as {
        role?: UserRoleType
        isApproved?: "true" | "false" | "undefined"
    }

    return await UserModel.find()
        .populate("conversations")
        .populate({
            path: "conversations",
            populate: [
                {
                    path: "messages",
                    model: "Message",
                },
                {
                    path: "user1",
                    model: "User",
                },
                {
                    path: "user2",
                    model: "User",
                },
            ],
        })
        .then(usersFromDb => {
            if (isApproved) {
                if (isApproved === "true")
                    usersFromDb = usersFromDb.filter(
                        user => user.isApproved === true
                    )
                if (isApproved === "false")
                    usersFromDb = usersFromDb.filter(
                        user => user.isApproved === false
                    )
                if (isApproved === "undefined")
                    usersFromDb = usersFromDb.filter(
                        user =>
                            user.isApproved !== true &&
                            user.isApproved !== false
                    )
            }

            if (role)
                usersFromDb = usersFromDb.filter(user => user.role === role)

            return res.status(200).json(usersFromDb)
        })
        .catch(err => {
            next(err)
            return res
                .status(400)
                .json({ message: "Error while fetching artists." })
        })
})

// Get all artists with non approved ones
router.get("/artists-admin", async (req, res, next) => {
    const { isApproved } = req.query as {
        isApproved: "true" | "false" | "undefined"
    }

    return await UserModel.find({ role: "artist" })
        .then(foundUsers => {
            const approvedArtists = foundUsers.filter(
                artist => artist.isApproved === true
            )
            const rejectedArtists = foundUsers.filter(
                artist => artist.isApproved === false
            )
            const pendingArtists = foundUsers.filter(
                artist =>
                    artist.isApproved !== true && artist.isApproved !== false
            )

            const artists = foundUsers.filter(artist => {
                if (isApproved === "true") return artist.isApproved === true
                if (isApproved === "false") return artist.isApproved === false
                return artist.isApproved !== true && artist.isApproved !== false
            })

            return res.status(200).json({
                artists,
                approvedArtists: approvedArtists.length,
                rejectedArtists: rejectedArtists.length,
                pendingArtists: pendingArtists.length,
            })
        })
        .catch(err => {
            next(err)
            return res
                .status(400)
                .json({ message: "Error while fetching artists." })
        })
})

// Get artists
router.get("/artists", async (req, res, next) => {
    const { city, genre, query, sort } = req.query as {
        city?: string
        genre?: string
        query?: string
        sort?: SortType | "undefined"
    }

    return await UserModel.find(visibleArtists)
        .then(usersFromDb => {
            usersFromDb.forEach(artist => {
                artist.available = artist.available
                    .filter(date => new Date(date) >= new Date())
                    .sort((a, b) => (new Date(a) < new Date(b) ? -1 : 0))
            })

            if (city !== "undefined")
                usersFromDb = usersFromDb.filter(
                    artist => slugify(artist.city!) === slugify(city!)
                )

            if (genre !== "undefined")
                usersFromDb = usersFromDb.filter(
                    artist => slugify(artist.genre!) === slugify(genre!)
                )

            if (sort !== "undefined") {
                if (sort === "availability") {
                    usersFromDb = usersFromDb.sort((a, b) =>
                        new Date(a.available[0]) < new Date(b.available[0])
                            ? -1
                            : 0
                    )
                }

                if (sort === "price") {
                    usersFromDb = usersFromDb.sort(
                        (a, b) => (a.price || 0) - (b.price || 0)
                    )
                }
            }

            if (query !== "undefined") {
                const fuse = new Fuse(usersFromDb, {
                    keys: ["city", "genre", "fullName"],
                })

                usersFromDb = fuse
                    ?.search(query!)
                    .map(fuseItem => fuseItem.item)
            }

            return res.status(200).json(usersFromDb)
        })
        .catch(err => next(err))
})

// Get all cities
router.get("/cities", async (_, res, next) => {
    return await UserModel.find(visibleArtists)
        .then(usersFromDb => {
            const cities = usersFromDb.map(artist => artist.city)
            return res.status(200).json(deleteDuplicates(cities))
        })
        .catch(err => next(err))
})

// Get all genres
router.get("/genres", async (_, res, next) => {
    return await UserModel.find()
        .then(usersFromDb => {
            const genres = usersFromDb.map(artist => artist.genre)
            return res.status(200).json(deleteDuplicates(genres))
        })
        .catch(err => next(err))
})

// Get user by ID
router.get("/user/:id", async (req, res, next) => {
    return await UserModel.findById(req.params.id)
        .populate("conversations")
        .populate({
            path: "conversations",
            populate: [
                {
                    path: "user1",
                    model: "User",
                },
                {
                    path: "user2",
                    model: "User",
                },
                {
                    path: "messages",
                    model: "Message",
                },
            ],
        })
        .then(userFromDb => res.status(200).json(userFromDb))
        .catch(err => {
            next(err)
            return res.status(400).json({ message: "User not found" })
        })
})

// Edit user
router.put("/edit-account/:id", async (req, res, next) => {
    const { fullName, avatar, city, ...reqBody } = req.body

    if (!fullName) {
        return res
            .status(400)
            .json({ message: "Your full name can not be empty." })
    }

    if (!city) return res.status(400).json({ message: "City is required." })

    return await UserModel.findByIdAndUpdate(
        req.params.id,
        { fullName, avatar, city, ...reqBody },
        { new: true }
    )
        .then(updatedUser => {
            const payload = { user: updatedUser }

            // @ts-expect-error
            const authToken = jwt.sign(payload, TOKEN_SECRET, jwtConfig)

            res.status(201).json({
                user: updatedUser,
                authToken: authToken,
            })
        })
        .catch(err => next(err))
})

// Edit password
router.put("/edit-password/:id", async (req, res, next) => {
    const { oldPassword, newPassword } = req.body

    if (!passwordRegex.test(newPassword)) {
        return res.status(400).json({
            message:
                "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
        })
    }

    const foundUser: UserType | null = await UserModel.findById(req.params.id)

    if (foundUser) {
        if (await bcrypt.compare(oldPassword, foundUser.password)) {
            if (passwordRegex.test(newPassword)) {
                const salt = bcrypt.genSaltSync(SALT_ROUNDS)
                const hashedPassword = bcrypt.hashSync(newPassword, salt)

                return await UserModel.findByIdAndUpdate(
                    req.params.id,
                    { password: hashedPassword },
                    { new: true }
                )
                    .then(updatedUser => {
                        const payload = { user: updatedUser }

                        // @ts-expect-error
                        const authToken = jwt.sign(
                            payload,
                            TOKEN_SECRET,
                            jwtConfig
                        )

                        res.status(201).json({
                            user: updatedUser,
                            authToken: authToken,
                        })
                    })
                    .catch(err => next(err))
            } else {
                return res.status(400).json({
                    message:
                        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
                })
            }
        } else {
            return res
                .status(400)
                .json({ message: "Old password does not match." })
        }
    } else {
        return res.status(400).json({ message: "User not found." })
    }
})

// Approve artist
router.put("/approve-artist/:id", async (req, res, next) => {
    const { isApproved } = req.body as { isApproved: boolean }

    return await UserModel.findByIdAndUpdate(
        req.params.id,
        { isApproved },
        { new: true }
    )
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => next(err))
})

// Delete user
router.put("/delete-account/:id", async (req, res, next) => {
    const { password } = req.body as { password: string }

    const foundUser: UserType | null = await UserModel.findById(req.params.id)

    if (foundUser) {
        if (await bcrypt.compare(password, foundUser?.password)) {
            return await UserModel.findByIdAndDelete(req.params.id)
                .then(() => res.status(200).json({ message: "User deleted" }))
                .catch(err => next(err))
        } else {
            return res.status(500).json({ message: "Wrong password." })
        }
    } else {
        return res.status(500).json({ message: "User not found." })
    }
})

export default router
