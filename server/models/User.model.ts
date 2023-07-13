/*=============================================== User model ===============================================*/

import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },

        token: {
            type: String,
            required: true,
        },
        fullName: String,
        password: String,
        verified: Boolean,
        verifyToken: String,
        resetToken: String,
        avatar: String,
        city: String,
        role: {
            type: String,
            enum: ["user", "artist"],
        },

        genre: String,
        bio: String,
        price: Number,
        available: Array,
        youtubeUrl: String,
        facebookUrl: String,
        instagramUrl: String,
        youtubeLinks: Array,
        isVisible: Boolean,
    },
    { timestamps: true }
)

export const UserModel = model("User", userSchema)
