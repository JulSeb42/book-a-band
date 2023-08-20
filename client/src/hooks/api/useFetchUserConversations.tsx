/*=============================================== useFetchUserConversations ===============================================*/

import { useState, useEffect, useContext } from "react"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import type { ConversationType, ServerErrorType } from "types"

export function useFetchUserConversations() {
    const { user } = useContext(AuthContext) as AuthContextType

    const [conversations, setConversations] = useState<ConversationType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<ServerErrorType>(undefined)

    useEffect(() => {
        const getData = async () =>
            await conversationService
                .getUserConversations(user?._id || "")
                .then(res => {
                    setConversations(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    setErrorMessage(err)
                    setLoading(false)
                })

        if (loading) getData()
    }, [loading, user?._id])

    return { conversations, loading, setLoading, errorMessage }
}
