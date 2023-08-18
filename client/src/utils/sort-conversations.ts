/*=============================================== Sort conversations ===============================================*/

import type { ConversationType } from "types"

export const sortConversations = (conversations: ConversationType[]) => {
    if (conversations) {
        conversations?.sort((a, b) => {
            const dateA = a.messages.length
                ? a.messages[a.messages.length - 1].createdAt
                : a.createdAt
            const dateB = b.messages.length
                ? b.messages[b.messages.length - 1].createdAt
                : b.createdAt

            return dateA > dateB ? -1 : 0
        })
    }

    return conversations
}
