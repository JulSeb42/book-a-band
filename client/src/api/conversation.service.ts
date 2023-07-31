/*=============================================== Conversation service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

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
}

export const conversationService = new ConversationService()
