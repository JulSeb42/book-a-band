/*=============================================== Filter conversations ===============================================*/

import type { ConversationType } from "types"

export const filterConversations = (
    conversations: ConversationType[],
    userId: string,
    read: string,
    search: string
) => {
    let filteredConversations = conversations

    if (search.length) {
        filteredConversations = filteredConversations?.filter(conversation => {
            const otherUser =
                conversation.user1._id === userId
                    ? conversation.user2
                    : conversation.user1

            return otherUser.fullName
                .toLowerCase()
                .includes(search.toLowerCase())
        })
    }

    if (read !== "all") {
        if (read === "unread") {
            filteredConversations = filteredConversations.filter(
                conversation =>
                    (conversation.user1._id === userId &&
                        conversation.readUser1 === false) ||
                    (conversation.user2._id === userId &&
                        conversation.readUser2 === false)
            )
        }

        if (read === "read") {
            filteredConversations = filteredConversations.filter(
                conversation =>
                    (conversation.user1._id === userId &&
                        conversation.readUser1 === true) ||
                    (conversation.user2._id === userId &&
                        conversation.readUser2 === true)
            )
        }
    }

    return filteredConversations
}
