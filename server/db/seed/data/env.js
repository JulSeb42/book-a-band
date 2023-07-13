const MONGODB_URI = "mongodb://localhost/book-a-band"

const TOKEN_SECRET = "IkQsKXeg6e"

const JWT_CONFIG = {
    algorithm: "HS256",
    expiresIn: "10d",
}

module.exports = {
    MONGODB_URI,
    TOKEN_SECRET,
    JWT_CONFIG,
}
