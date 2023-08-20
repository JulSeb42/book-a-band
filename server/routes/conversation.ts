/*=============================================== Conversation routes ===============================================*/

import { Router } from "express"
import jwt from "jsonwebtoken"
import { ConversationModel, MessageModel, UserModel } from "../models"
import { TOKEN_SECRET, jwtConfig } from "../utils"
import type { ConversationType, WhichUserType } from "../types"

const router = Router()

// Get all conversations
router.get("/all-conversations", async (_, res, next) => {
    return await ConversationModel.find()
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

// Get user's conversations
router.get("/user-conversations/:id", async (req, res, next) => {
    const foundConversation = await ConversationModel.find({
        $or: [{ user1: req.params.id }, { user2: req.params.id }],
    })

    if (foundConversation !== undefined) {
        return await ConversationModel.find({
            $or: [{ user1: req.params.id }, { user2: req.params.id }],
        })
            .populate("user1")
            .populate("user2")
            .populate("messages")
            .then(foundConversations =>
                res.status(200).json(foundConversations)
            )
            .catch(err => next(err))
    } else {
        return res.status(400).json({ message: "Conversation not found." })
    }
})

// Get conversation
router.get("/conversation/:id", async (req, res, next) => {
    return await ConversationModel.findById(req.params.id)
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
        .catch(err => {
            next(err)
            return res.status(400).json({ message: "Conversation not found" })
        })
})

// New conversation
router.post("/new-conversation", async (req, res, next) => {
    const { body, user1, user2 } = req.body as {
        body?: string
        user1: string
        user2: string
    }

    return await ConversationModel.create({
        user1,
        user2,
        readUser1: true,
        readUser2: false,
    })
        .then(async createdConversation => {
            if (!body) {
                return await UserModel.findByIdAndUpdate(
                    user1,
                    { $push: { conversations: createdConversation } },
                    { new: true }
                ).then(async updatedUser1 => {
                    return await UserModel.findByIdAndUpdate(
                        user2,
                        { $push: { conversations: createdConversation } },
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
                            createdConversation,
                            user: updatedUser1,
                            authToken: authToken,
                        })
                    })
                })
            }

            return await MessageModel.create({
                body,
                sender: user1,
                conversation: createdConversation._id,
            }).then(async createdMessage => {
                return await ConversationModel.findByIdAndUpdate(
                    createdConversation._id,
                    { $push: { messages: createdMessage } },
                    { new: true }
                ).then(async updatedConversation => {
                    return await UserModel.findByIdAndUpdate(
                        user1,
                        { $push: { conversations: updatedConversation } },
                        { new: true }
                    ).then(async updatedUser1 => {
                        return await UserModel.findByIdAndUpdate(
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
router.post("/new-message", async (req, res, next) => {
    const { body, conversation, sender, whichUser } = req.body as {
        body: string
        conversation: string
        sender: string
        whichUser: WhichUserType
    }

    if (!body)
        return res
            .status(400)
            .json({ message: "Your message can not be empty." })

    return await MessageModel.create({
        body,
        sender,
        conversation,
    })
        .then(async createdMessage => {
            return await ConversationModel.findByIdAndUpdate(
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

// Read conversation
router.put("/read-conversation/:id", async (req, res, next) => {
    return await ConversationModel.findByIdAndUpdate(
        req.params.id,
        { readUser1: true, readUser2: true },
        { new: true }
    )
        .then(updatedConversation => res.status(200).json(updatedConversation))
        .catch(err => next(err))
})

router.delete("/delete-conversation/:id", async (req, res, next) => {
    return await ConversationModel.findById(req.params.id)
        .then(() =>
            MessageModel.deleteMany({ conversation: req.params.id }).then(() =>
                ConversationModel.findByIdAndDelete(req.params.id).then(() =>
                    res
                        .status(200)
                        .json({ message: "Conversation has been deleted" })
                )
            )
        )
        .catch(err => next(err))
})

export default router
