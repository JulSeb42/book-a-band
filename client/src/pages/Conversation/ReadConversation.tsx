/*=============================================== ReadConversation ===============================================*/

import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { conversationService } from "api"

import { toast } from "utils"

export const ReadConversation = () => {
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        const readConversation = async () => {
            if (id)
                await conversationService.readConversation(id).catch(err => {
                    console.log(err)
                    toast.error("An error occured while updating conversation.")
                })
        }

        if (id) {
            readConversation()
        }
    }, [id])

    return null
}
