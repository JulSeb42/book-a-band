/*=============================================== Message type ===============================================*/

import type { UserType, ConversationType } from "./"

export type MessageType = {
    _id: string
    body: string
    date: string
    time: string
    sender: UserType
    conversation: ConversationType
}
