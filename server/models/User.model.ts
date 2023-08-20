/*=============================================== User model ===============================================*/

import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
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
            enum: ["user", "artist", "admin"],
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
        isApproved: Boolean,
        conversations: [
            {
                type: Schema.Types.ObjectId,
                ref: "Conversation",
            },
        ],
    },
    { timestamps: true }
)

export const UserModel = model("User", userSchema)
