/*=============================================== Conversation ===============================================*/

import { useContext } from "react"
import { useParams } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"

import { Page, Chat } from "components"
import { ConversationHeader } from "pages/Conversation/ConversationHeader"
import { ReadConversation } from "pages/Conversation/ReadConversation"
import { NotFound } from "pages/NotFound"
import { useFetchConversation } from "hooks"

export const Conversation = () => {
    const { id } = useParams<{ id: string }>()

    const { user } = useContext(AuthContext) as AuthContextType

    const { conversation, loading, errorMessage } = useFetchConversation(
        id || ""
    )

    if (
        (conversation?.user1?._id !== user?._id &&
            conversation?.user2?._id !== user?._id) ||
        !id ||
        !conversation
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
            error={errorMessage}
        >
            <ReadConversation />
            <ConversationHeader otherUser={otherUser} isLoading={loading} />
            <Chat conversation={conversation} isLoading={loading} />
        </Page>
    )
}
