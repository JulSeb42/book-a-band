/*=============================================== MyAccountConversations ===============================================*/

import { Fragment } from "react"
import { generateNumbers } from "ts-utils-julseb"

import {
    Text,
    ConversationCard,
    ConversationCardSkeleton,
    Hr,
} from "components"

import type { MyAccountSectionsProps } from "pages/account/MyAccount/sections/types"

export const MyAccountConversations = ({
    user,
    isLoading,
}: MyAccountSectionsProps) => {
    if (isLoading) return <MyAccountConversationsSkeleton />

    if (!user?.conversations?.length)
        return <Text>You do not have any conversation yet.</Text>

    return (
        <>
            {user?.conversations
                ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 0))
                .map((conversation, i) => (
                    <Fragment key={conversation._id}>
                        <ConversationCard conversation={conversation} />

                        {i !== user?.conversations?.length - 1 && <Hr />}
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
