/*=============================================== MyAccountConversations ===============================================*/

import { Fragment } from "react"
import { generateNumbers } from "ts-utils-julseb"

import {
    Text,
    ConversationCard,
    ConversationCardSkeleton,
    Hr,
    Pagination,
} from "components"
import { useFetchUserConversations, usePaginatedData } from "hooks"
import { sortConversations } from "utils"

interface MyAccountConversationsProps {
    search: string
}

export function MyAccountConversations({
    search,
}: MyAccountConversationsProps) {
    const { conversations, loading, errorMessage } = useFetchUserConversations()
    const { paginatedData, totalPages } = usePaginatedData(
        sortConversations(conversations),
        10
    )

    if (loading) return <MyAccountConversationsSkeleton />

    if (errorMessage)
        return (
            <Text>
                Error while fetching conversations:{" "}
                {errorMessage.response.data.message}
            </Text>
        )

    if (!paginatedData || !paginatedData?.length)
        return <Text>You do not have any conversation yet.</Text>

    let filteredConversations = paginatedData

    if (search.length) {
        filteredConversations = filteredConversations?.filter(
            conversation =>
                conversation.user1.fullName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                conversation.user2.fullName
                    .toLowerCase()
                    .includes(search.toLowerCase())
        )
    }

    if (!filteredConversations?.length)
        return <Text>Your search did not return any result.</Text>

    return (
        <>
            {filteredConversations?.map((conversation, i) => (
                <Fragment key={conversation._id}>
                    <ConversationCard conversation={conversation} />

                    {i !== filteredConversations?.length - 1 && <Hr />}
                </Fragment>
            ))}

            <Pagination totalPages={totalPages} />
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
