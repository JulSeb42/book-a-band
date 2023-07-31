/*=============================================== Conversation type ===============================================*/

import type { UserType, MessageType } from "./"

export type ConversationType = {
    _id: string
    user1: UserType
    user2: UserType
    readUser1: boolean
    readUser2: boolean
    messages: MessageType[]
    createdAt: Date
    updatedAt: Date
}
