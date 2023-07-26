/*=============================================== Users routes ===============================================*/

import { Router } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { passwordRegex, deleteDuplicates, slugify } from "ts-utils-julseb"

import { UserModel } from "../models/User.model"

import { SALT_ROUNDS, TOKEN_SECRET, jwtConfig } from "../utils"
import type { SortType } from "../types"

const router = Router()

// Get all users
router.get("/all-users", (_, res, next) => {
    UserModel.find()
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

            if (query !== "undefined") {
                artists = artists.filter(
                    artist =>
                        slugify(artist.city!).includes(slugify(query!)) ||
                        slugify(artist.genre!).includes(slugify(query!)) ||
                        slugify(artist.fullName!).includes(slugify(query!))
                )
            }

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

            res.status(200).json(artists)
        })
        .catch(err => next(err))
})

// Get all cities
router.get("/cities", (req, res, next) => {
    UserModel.find()
        .then(usersFromDb => {
            const artists = usersFromDb.filter(
                user => user.role === "artist" && user.isVisible
            )
            const cities = artists.map(artist => artist.city)

            return res.status(200).json(deleteDuplicates(cities))
        })
        .catch(err => next(err))
})

// Get all genres
router.get("/genres", (req, res, next) => {
    UserModel.find()
        .then(usersFromDb => {
            const artists = usersFromDb.filter(
                user => user.role === "artist" && user.isVisible
            )
            const genres = artists.map(artist => artist.genre)

            return res.status(200).json(deleteDuplicates(genres))
        })
        .catch(err => next(err))
})

// Get user by ID
router.get("/user/:id", (req, res, next) => {
    UserModel.findById(req.params.id)
        .then(userFromDb => res.status(200).json(userFromDb))
        .catch(() => res.status(400).json({ message: "User not found" }))
})

// Edit user
router.put("/edit-account/:id", (req, res, next) => {
    const { fullName, avatar } = req.body

    if (!fullName) {
        return res
            .status(400)
            .json({ message: "Your full name can not be empty." })
    }

    UserModel.findByIdAndUpdate(
        req.params.id,
        { fullName, avatar },
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
router.put("/edit-password/:id", (req, res, next) => {
    const { password } = req.body

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message:
                "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
        })
    }

    const salt = bcrypt.genSaltSync(SALT_ROUNDS)
    const hashedPassword = bcrypt.hashSync(password, salt)

    UserModel.findByIdAndUpdate(
        req.params.id,
        { password: hashedPassword },
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

// Delete user
router.delete("/delete-account/:id", (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: "User deleted" }))
        .catch(err => next(err))
})

export default router
