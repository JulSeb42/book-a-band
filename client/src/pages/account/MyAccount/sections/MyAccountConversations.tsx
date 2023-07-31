/*=============================================== MyAccountConversations ===============================================*/

import { Fragment } from "react"

import { Text, ConversationCard, Hr } from "components"

import type { MyAccountSectionsProps } from "pages/account/MyAccount/sections/types"

export const MyAccountConversations = ({
    user,
    isLoading,
}: MyAccountSectionsProps) => {
    if (isLoading) return null // TODO: Add skeleton

    if (!user?.conversations?.length)
        return <Text>You do not have any conversation yet.</Text>

    return (
        <>
            {user?.conversations?.map((conversation, i) => (
                <Fragment key={conversation._id}>
                    <ConversationCard conversation={conversation} />

                    {i !== user?.conversations?.length - 1 && <Hr />}
                </Fragment>
            ))}
        </>
    )
}
