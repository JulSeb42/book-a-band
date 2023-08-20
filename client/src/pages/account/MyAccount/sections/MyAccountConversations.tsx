/*=============================================== MyAccountConversations ===============================================*/

import { Fragment, useContext, useState, useEffect } from "react"
import { generateNumbers } from "ts-utils-julseb"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import {
    Text,
    ConversationCard,
    ConversationCardSkeleton,
    Hr,
    Pagination,
} from "components"
import { usePaginatedData } from "hooks"
import { sortConversations, filterConversations } from "utils"
import type { ConversationType, ServerErrorType } from "types"

interface MyAccountConversationsProps {
    search: string
    read: string
}

export function MyAccountConversations({
    search,
    read,
}: MyAccountConversationsProps) {
    const { user } = useContext(AuthContext) as AuthContextType

    const [conversations, setConversations] = useState<ConversationType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<ServerErrorType>(undefined)

    useEffect(() => {
        const getData = async () =>
            await conversationService
                .getUserConversations(user?._id || "")
                .then(res => {
                    setConversations(
                        sortConversations(res.data).filter(
                            conversation =>
                                !(
                                    conversation.user2._id === user?._id &&
                                    !conversation.messages.length
                                )
                        )
                    )
                    setLoading(false)
                })
                .catch(err => {
                    setErrorMessage(err)
                    setLoading(false)
                })

        if (loading) getData()
    }, [loading, user?._id])

    const { paginatedData, totalPages } = usePaginatedData(conversations, 10)

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

    const filteredConversations = filterConversations(
        paginatedData,
        user?._id || "",
        read,
        search
    )

    if (!filteredConversations?.length)
        return <Text>Your search did not return any result.</Text>

    return (
        <Fragment>
            {filteredConversations?.map((conversation, i) => (
                <Fragment key={conversation._id}>
                    <ConversationCard
                        conversation={conversation}
                        setLoading={setLoading}
                    />

                    {i !== filteredConversations?.length - 1 && <Hr />}
                </Fragment>
            ))}

            <Pagination totalPages={totalPages} />
        </Fragment>
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
