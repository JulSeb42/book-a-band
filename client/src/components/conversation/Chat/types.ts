/*=============================================== Chat types ===============================================*/

import type { ConversationType } from "types"

const messageTypes = { sent: "sent", received: "received" } as const
export type MessageTypeType = keyof typeof messageTypes

export interface ChatProps {
    conversation: ConversationType
    isLoading: boolean
}
