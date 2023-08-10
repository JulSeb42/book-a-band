/*=============================================== MyAccountConversations ===============================================*/

import { Fragment, useContext } from "react"
import { generateNumbers } from "ts-utils-julseb"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import {
    Text,
    ConversationCard,
    ConversationCardSkeleton,
    Hr,
} from "components"
import { useFetch } from "hooks"

import type { ConversationType } from "types"

export const MyAccountConversations = () => {
    const { user } = useContext(AuthContext) as AuthContextType

    const {
        response: conversations,
        loading,
        error,
    } = useFetch<ConversationType[]>(
        conversationService.getUserConversations(user?._id || "")
    )

    if (loading) return <MyAccountConversationsSkeleton />

    if (error)
        return (
            <Text>
                Error while fetching conversations:{" "}
                {error.response.data.message}
            </Text>
        )

    if (!conversations?.length)
        return <Text>You do not have any conversation yet.</Text>

    return (
        <>
            {conversations
                ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 0))
                .map((conversation, i) => (
                    <Fragment key={conversation._id}>
                        <ConversationCard conversation={conversation} />

                        {i !== conversations?.length - 1 && <Hr />}
                    </Fragment>
                ))}
        </>
    )
}

const MyAccountConversationsSkeleton = () => {
    const numbers = generateNumbers(0, 4)

    return numbers.map((n, i) => (
        <Fragment key={n}>
            <ConversationCardSkeleton />
            {i !== numbers.length - 1 && <Hr />}
        </Fragment>
    ))
}
