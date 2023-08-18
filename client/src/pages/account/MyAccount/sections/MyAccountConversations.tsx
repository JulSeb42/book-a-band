/*=============================================== MyAccountConversations ===============================================*/

import { Fragment } from "react"
import { generateNumbers } from "ts-utils-julseb"

import {
    Text,
    ConversationCard,
    ConversationCardSkeleton,
    Hr,
} from "components"
import { useFetchUserConversations } from "hooks"
import { sortConversations } from "utils"

export function MyAccountConversations() {
    const { conversations, loading, errorMessage } = useFetchUserConversations()

    if (loading) return <MyAccountConversationsSkeleton />

    if (errorMessage)
        return (
            <Text>
                Error while fetching conversations:{" "}
                {errorMessage.response.data.message}
            </Text>
        )

    if (!conversations || !conversations?.length)
        return <Text>You do not have any conversation yet.</Text>

    return (
        <>
            {sortConversations(conversations)?.map((conversation, i) => (
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
