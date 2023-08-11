/*=============================================== useGetConversation ===============================================*/

import { useState, useEffect } from "react"

import { conversationService } from "api"

import type { ConversationType, ServerErrorType } from "types"

export const useGetConversation = (id: string) => {
    const [conversation, setConversation] = useState<ConversationType>()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<
        ServerErrorType | undefined
    >(undefined)

    useEffect(() => {
        const getData = async () =>
            await conversationService
                .getConversation(id)
                .then(res => {
                    setConversation(res.data)
                    setLoading(false)
                })
                .catch(err => setErrorMessage(err))

        if (loading) getData()
    }, [id, loading])

    return { conversation, loading, errorMessage }
}
