/*=============================================== MyAccountConversations ===============================================*/

import { Fragment } from "react"
import { generateNumbers } from "ts-utils-julseb"

import {
    Text,
    ConversationCard,
    ConversationCardSkeleton,
    Hr,
} from "components"
import { useGetUserConversations } from "hooks"

export const MyAccountConversations = () => {
    const { conversations, loading, errorMessage } = useGetUserConversations()

    if (loading) return <MyAccountConversationsSkeleton />

    if (errorMessage)
        return (
            <Text>
                Error while fetching conversations:{" "}
                {errorMessage.response.data.message}
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
