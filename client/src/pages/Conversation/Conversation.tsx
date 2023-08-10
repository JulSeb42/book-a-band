/*=============================================== Conversation ===============================================*/

import { useContext } from "react"
import { useParams } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import { Page, Chat } from "components"
import { ConversationHeader } from "pages/Conversation/ConversationHeader"
import { ReadConversation } from "pages/Conversation/ReadConversation"
import { NotFound } from "pages/NotFound"
import { useFetch } from "hooks"

import type { ConversationType } from "types"

export const Conversation = () => {
    const { id } = useParams<{ id: string }>()

    const { user } = useContext(AuthContext) as AuthContextType

    const {
        response: conversation,
        loading,
        error,
    } = useFetch<ConversationType>(conversationService.getConversation(id!))

    if (
        (conversation?.user1?._id !== user?._id &&
            conversation?.user2?._id !== user?._id) ||
        !id
    )
        return <NotFound />

    const otherUser =
        conversation?.user1?._id === user?._id
            ? conversation?.user2
            : conversation?.user1

    return (
        <Page
            title={`Conversation${
                !loading ? ` with ${otherUser?.fullName}` : ""
            }`}
            error={error}
        >
            <ReadConversation />

            <ConversationHeader otherUser={otherUser!} isLoading={loading} />

            <Chat conversation={conversation!} isLoading={loading} />
        </Page>
    )
}
