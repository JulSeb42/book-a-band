/*=============================================== Conversation model ===============================================*/

import { Schema, model } from "mongoose"

const ConversationSchema = new Schema(
    {
        user1: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        user2: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        readUser1: Boolean,
        readUser2: Boolean,
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: "Message",
            },
        ],
    },
    { timestamps: true }
)

export const ConversationModel = model("Conversation", ConversationSchema)
