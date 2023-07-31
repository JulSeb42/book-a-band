/*=============================================== Users routes ===============================================*/

import { Router } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Fuse from "fuse.js"
import { passwordRegex, deleteDuplicates, slugify } from "ts-utils-julseb"

import { UserModel } from "../models/User.model"

import {
    SALT_ROUNDS,
    TOKEN_SECRET,
    jwtConfig,
    getVisibleArtists,
} from "../utils"
import type { SortType, UserType } from "../types"

const router = Router()

// Get all users
router.get("/all-users", (_, res, next) => {
    UserModel.find()
        .populate("conversations")
        .then(usersFromDb => res.status(200).json(usersFromDb))
        .catch(err => next(err))
})

// Get artists
router.get("/artists", (req, res, next) => {
    const { city, genre, query, sort } = req.query as {
        city?: string
        genre?: string
        query?: string
        sort?: SortType | "undefined"
    }

    UserModel.find()
        .then(usersFromDb => {
            let artists = usersFromDb.filter(
                user => user.role === "artist" && user.isVisible
            )

            artists.forEach(artist => {
                artist.available = artist.available
                    .filter(date => new Date(date) >= new Date())
                    .sort((a, b) => (new Date(a) < new Date(b) ? -1 : 0))
            })

            if (city !== "undefined")
                artists = artists.filter(
                    artist => slugify(artist.city!) === slugify(city!)
                )

            if (genre !== "undefined")
                artists = artists.filter(
                    artist => slugify(artist.genre!) === slugify(genre!)
                )

            if (sort !== "undefined") {
                if (sort === "availability") {
                    artists = artists.sort((a, b) =>
                        new Date(a.available[0]) < new Date(b.available[0])
                            ? -1
                            : 0
                    )
                }

                if (sort === "price") {
                    artists = artists.sort(
                        (a, b) => (a.price || 0) - (b.price || 0)
                    )
                }
            }

            if (query !== "undefined") {
                const fuse = new Fuse(artists, {
                    keys: ["city", "genre", "fullName"],
                })

                artists = fuse?.search(query!).map(fuseItem => fuseItem.item)
            }

            res.status(200).json(artists)
        })
        .catch(err => next(err))
})

// Get all cities
router.get("/cities", (_, res, next) => {
    UserModel.find()
        .then(usersFromDb => {
            // @ts-expect-error
            const artists = getVisibleArtists(usersFromDb)
            const cities = artists.map(artist => artist.city)
            return res.status(200).json(deleteDuplicates(cities))
        })
        .catch(err => next(err))
})

// Get all genres
router.get("/genres", (_, res, next) => {
    UserModel.find()
        .then(usersFromDb => {
            // @ts-expect-error
            const artists = getVisibleArtists(usersFromDb)
            const genres = artists.map(artist => artist.genre)
            return res.status(200).json(deleteDuplicates(genres))
        })
        .catch(err => next(err))
})

// Get user by ID
router.get("/user/:id", (req, res, next) => {
    UserModel.findById(req.params.id)
        .populate("conversations")
        .populate({
            path: "conversations",
            populate: {
                path: "user1",
                model: "User",
            },
        })
        .populate({
            path: "conversations",
            populate: {
                path: "user2",
                model: "User",
            },
        })
        .then(userFromDb => res.status(200).json(userFromDb))
        .catch(err => {
            next(err)
            return res.status(400).json({ message: "User not found" })
        })
})

// Edit user
router.put("/edit-account/:id", (req, res, next) => {
    const { fullName, avatar, city, ...reqBody } = req.body

    if (!fullName) {
        return res
            .status(400)
            .json({ message: "Your full name can not be empty." })
    }

    if (!city) return res.status(400).json({ message: "City is required." })

    UserModel.findByIdAndUpdate(
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

                UserModel.findByIdAndUpdate(
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

// Delete user
router.delete("/delete-account/:id", (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: "User deleted" }))
        .catch(err => next(err))
})

export default router
