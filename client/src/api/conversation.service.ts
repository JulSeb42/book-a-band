/*=============================================== Conversation service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

import type { WhichUserType } from "types"

class ConversationService {
    allConversations() {
        return http.get(`${SERVER_PATHS.CONVERSATION}/all-conversations`)
    }

    getConversation(id: string) {
        return http.get(`${SERVER_PATHS.CONVERSATION}/conversation/${id}`)
    }

    getUserConversations(id: string) {
        return http.get(`${SERVER_PATHS.CONVERSATION}/user-conversations/${id}`)
    }

    newConversation(data: { body?: string; user1: string; user2: string }) {
        return http.post(`${SERVER_PATHS.CONVERSATION}/new-conversation`, data)
    }

    newMessage(data: {
        body: string
        conversation: string
        sender: string
        whichUser: WhichUserType
    }) {
        return http.post(`${SERVER_PATHS.CONVERSATION}/new-message`, data)
    }

    readConversation(id: string) {
        return http.put(`${SERVER_PATHS.CONVERSATION}/read-conversation/${id}`)
    }

    deleteConversation(id: string) {
        return http.delete(
            `${SERVER_PATHS.CONVERSATION}/delete-conversation/${id}`
        )
    }
}

export const conversationService = new ConversationService()
