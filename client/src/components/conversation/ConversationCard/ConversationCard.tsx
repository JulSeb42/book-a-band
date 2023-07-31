/*=============================================== ConversationCard component ===============================================*/

import { useContext } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Avatar, Text, Badge } from "components"
import { PATHS } from "data"

import {
    StyledConversationCard,
    CardContent,
    BadgeContainer,
} from "components/conversation/ConversationCard/styles"
import type { ConversationCardProps } from "components/conversation/ConversationCard/types"

export const ConversationCard = ({ conversation }: ConversationCardProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const conversationUser =
        user?._id === conversation.user1._id
            ? conversation.user2
            : conversation.user1

    return (
        <StyledConversationCard to={PATHS.CONVERSATION(conversation._id)}>
            <Avatar
                src={conversationUser.avatar}
                username={conversationUser.fullName}
                size={48}
            />

            <CardContent>
                <Text tag="h6" maxLines={1}>
                    {conversationUser.fullName}
                </Text>

                <Text maxLines={1} color="gray">
                    {
                        conversation.messages[conversation.messages.length - 1]
                            .body
                    }
                </Text>
            </CardContent>

            <BadgeContainer>
                <Badge />
            </BadgeContainer>

            {((conversation.user1._id === user?._id &&
                !conversation.readUser1) ||
                (conversation.user2._id === user?._id &&
                    !conversation.readUser2)) && (
                <BadgeContainer>
                    <Badge />
                </BadgeContainer>
            )}
        </StyledConversationCard>
    )
}

export const ConversationCardSkeleton = () => {
    return <div></div>
}
