/*=============================================== ReadConversation ===============================================*/

import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { conversationService } from "api"

export const ReadConversation = () => {
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        console.log("Hello")
        if (id) {
            conversationService.readConversation(id).then(() => {})
        }
    }, [id])

    return null
}
