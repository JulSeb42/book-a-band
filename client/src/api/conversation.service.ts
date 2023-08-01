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

    newConversation(data: { body: string; user1: string; user2: string }) {
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
}

export const conversationService = new ConversationService()
