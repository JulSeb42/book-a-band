/*=============================================== MyAccountConversations ===============================================*/

import { Fragment, useContext } from "react"
import { generateNumbers } from "ts-utils-julseb"

import { AuthContext, type AuthContextType } from "context"

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
    read: string
}

export function MyAccountConversations({
    search,
    read,
}: MyAccountConversationsProps) {
    const { user } = useContext(AuthContext) as AuthContextType

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

    if (read !== "all") {
        if (read === "unread") {
            filteredConversations = filteredConversations.filter(
                conversation =>
                    (conversation.user1._id === user?._id &&
                        conversation.readUser1 === false) ||
                    (conversation.user2._id === user?._id &&
                        conversation.readUser2 === false)
            )
        }

        if (read === "read") {
            filteredConversations = filteredConversations.filter(
                conversation =>
                    (conversation.user1._id === user?._id &&
                        conversation.readUser1 === true) ||
                    (conversation.user2._id === user?._id &&
                        conversation.readUser2 === true)
            )
        }
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
