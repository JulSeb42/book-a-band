/*=============================================== Message model ===============================================*/

import { Schema, model } from "mongoose"

const MessageSchema = new Schema(
    {
        body: String,
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        conversation: {
            type: Schema.Types.ObjectId,
            ref: "Conversation",
        },
    },
    { timestamps: true }
)

export const MessageModel = model("Message", MessageSchema)
