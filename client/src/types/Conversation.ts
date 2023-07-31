/*=============================================== Conversation type ===============================================*/

import type { UserType } from "./"

export type ConversationType = {
    _id: string
    user1: UserType
    user2: UserType
    readUser1: boolean
    readUser2: boolean
}
