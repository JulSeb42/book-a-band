/*=============================================== Conversation routes ===============================================*/

import { Router } from "express"
import jwt from "jsonwebtoken"

import { ConversationModel, MessageModel, UserModel } from "../models"

import { TOKEN_SECRET, jwtConfig } from "../utils"

const router = Router()

// Get all conversations
router.get("/all-conversations", (_, res, next) => {
    ConversationModel.find()
        .populate("user1")
        .populate("user2")
        .populate("messages")
        .populate({
            path: "messages",
            populate: {
                path: "sender",
                model: "User",
            },
        })
        .then(conversationsFromDb => res.status(200).json(conversationsFromDb))
        .catch(err => next(err))
})

// Get conversation
router.get("/conversation/:id", (req, res, next) => {
    ConversationModel.findById(req.params.id)
        .populate("user1")
        .populate("user2")
        .populate("messages")
        .populate({
            path: "messages",
            populate: {
                path: "sender",
                model: "User",
            },
        })
        .then(foundConversation => res.status(200).json(foundConversation))
        .catch(err => next(err))
})

// New conversation
router.post("/new-conversation", (req, res, next) => {
    const { body, user1, user2 } = req.body as {
        body: string
        user1: string
        user2: string
    }

    if (!body)
        return res.status(400).json({ message: "Body can not be empty." })

    ConversationModel.create({
        user1,
        user2,
        readUser1: true,
        readUser2: false,
    })
        .then(createdConversation => {
            MessageModel.create({
                body,
                sender: user1,
                conversation: createdConversation._id,
            }).then(createdMessage => {
                ConversationModel.findByIdAndUpdate(
                    createdConversation._id,
                    { $push: { messages: createdMessage } },
                    { new: true }
                ).then(updatedConversation => {
                    UserModel.findByIdAndUpdate(
                        user1,
                        { $push: { conversations: updatedConversation } },
                        { new: true }
                    ).then(updatedUser1 => {
                        UserModel.findByIdAndUpdate(
                            user2,
                            { $push: { conversations: updatedConversation } },
                            { new: true }
                        ).then(() => {
                            const payload = { user: updatedUser1 }

                            // @ts-expect-error
                            const authToken = jwt.sign(
                                payload,
                                TOKEN_SECRET,
                                jwtConfig
                            )

                            return res.status(201).json({
                                createdConversation: updatedConversation,
                                createdMessage,
                                user: updatedUser1,
                                authToken: authToken,
                            })
                        })
                    })
                })
            })
        })
        .catch(err => next(err))
})

// New message
router.post("/new-message", (req, res, next) => {
    const { body, conversation, sender, whichUser } = req.body

    if (!body)
        return res
            .status(400)
            .json({ message: "Your message can not be empty." })

    MessageModel.create({
        body,
        sender,
        conversation,
    })
        .then(createdMessage => {
            ConversationModel.findByIdAndUpdate(
                conversation,
                {
                    $push: { messages: createdMessage },
                    readUser1: whichUser === "user2",
                    readUser2: whichUser === "user1",
                },
                { new: true }
            ).then(() => res.status(200).json(createdMessage))
        })
        .catch(err => next(err))
})

export default router
