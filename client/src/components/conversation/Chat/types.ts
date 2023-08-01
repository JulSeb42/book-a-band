/*=============================================== Chat types ===============================================*/

import type { ConversationType } from "types"

const messageTypes = { sent: "sent", received: "received" } as const
export type MessageTypeType = keyof typeof messageTypes

const whichUser = { user1: "user1", user2: "user2" } as const
export type WhichUserType = keyof typeof whichUser | undefined

export interface ChatProps {
    conversation: ConversationType
    isLoading: boolean
}
