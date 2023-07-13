/*=============================================== Seed users ===============================================*/

const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {
    getRandomString,
    getRandomAvatar,
    getRandomDate,
    convertToEmail,
} = require("ts-utils-julseb")

const User = require("./models/User.model")

const { MONGODB_URI, TOKEN_SECRET, JWT_CONFIG } = require("./data/env")

const usersData = require("./mongo/users.json")

const password = "Password42"
const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(password, salt)

const verifyTokenJulienUser = getRandomString()
const avatarJulienUser = getRandomAvatar("male")

const verifyTokenJulienArtist = getRandomString()
const avatarJulienArtist = getRandomAvatar("male")
const availableJulienArtist = [
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
    getRandomDate(2023, 2024),
].sort((a, b) => (new Date(a) < new Date(b) ? -1 : 0))

const realUsers = [
    {
        email: "julien@user.com",
        fullName: "Julien Sebag",
        password: hash,
        verified: true,
        verifyToken: verifyTokenJulienUser,
        resetToken: "",
        avatar: avatarJulienUser,
        city: "Berlin",
        role: "user",
        genre: undefined,
        bio: undefined,
        price: undefined,
        available: undefined,
        youtubeUrl: undefined,
        facebookUrl: undefined,
        instagramUrl: undefined,
        youtubeLinks: undefined,
        isVisible: false,

        token: jwt.sign(
            {
                email: "julien@user.com",
                fullName: "Julien Sebag",
                password: hash,
                verified: true,
                verifyToken: verifyTokenJulienUser,
                resetToken: "",
                avatar: avatarJulienUser,
                city: "Berlin",
                role: "user",
                genre: undefined,
                bio: undefined,
                price: undefined,
                available: undefined,
                youtubeUrl: undefined,
                facebookUrl: undefined,
                instagramUrl: undefined,
                youtubeLinks: undefined,
                isVisible: false,
            },
            TOKEN_SECRET,
            JWT_CONFIG
        ),
    },
    {
        email: "julien@artist.com",
        fullName: "Julien Artist",
        password: hash,
        verified: true,
        verifyToken: verifyTokenJulienArtist,
        resetToken: "",
        avatar: avatarJulienArtist,
        city: "Berlin",
        role: "artist",
        genre: "techno",
        bio: "Don't panic",
        price: 500,
        available: availableJulienArtist,
        youtubeUrl: "",
        facebookUrl: "",
        instagramUrl: "",
        youtubeLinks: "",
        isVisible: false,

        token: jwt.sign(
            {
                email: "julien@artist.com",
                fullName: "Julien Artist",
                password: hash,
                verified: true,
                verifyToken: verifyTokenJulienArtist,
                resetToken: "",
                avatar: avatarJulienArtist,
                city: "Berlin",
                role: "artist",
                genre: "techno",
                bio: "Don't panic",
                price: 500,
                available: availableJulienArtist,
                youtubeUrl: "",
                facebookUrl: "",
                instagramUrl: "",
                youtubeLinks: "",
                isVisible: false,
            },
            TOKEN_SECRET,
            JWT_CONFIG
        ),
    },
]

let users = []

for (let i = 0; i < usersData.length; i++) {
    const user = usersData[i]

    const available = [
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
        getRandomDate(2023, 2024),
    ].sort((a, b) => (new Date(a) < new Date(b) ? -1 : 0))

    const verifyToken = getRandomString()

    users.push({
        email: convertToEmail(user.fullName),
        fullName: user.fullName,
        password: hash,
        verified: true,
        verifyToken: verifyToken,
        resetToken: "",
        avatar: user.imageUrl,
        city: user.city,
        role: "artist",
        genre: user.genre,
        bio: user.bio,
        price: user.price,
        available,
        youtubeUrl: user.youtubeLink,
        facebookUrl: user.facebookLink,
        instagramUrl: user.instagramLink,
        youtubeLinks: user.youtube,
        isVisible: true,

        token: jwt.sign(
            {
                email: convertToEmail(user.fullName),
                fullName: user.fullName,
                password: hash,
                verified: true,
                verifyToken: verifyToken,
                resetToken: "",
                avatar: user.imageUrl,
                city: user.city,
                role: "artist",
                genre: user.role,
                bio: user.bio,
                price: user.price,
                available,
                youtubeUrl: user.youtubeLink,
                facebookUrl: user.facebookLink,
                instagramUrl: user.instagramLink,
                youtubeLinks: user.youtube,
                isVisible: true,
            },
            TOKEN_SECRET,
            JWT_CONFIG
        ),
    })
}

users.push(...realUsers)

// console.log(users)

mongoose.connect(MONGODB_URI)

User.insertMany(users)
    .then(res => {
        console.log(`You pushed ${res.length} users to the db`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
