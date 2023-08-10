/*=============================================== ConversationCard component ===============================================*/

import { useContext } from "react"
import { convertDateShort } from "ts-utils-julseb"

import { AuthContext, type AuthContextType } from "context"

import { Avatar, Text, Badge, Skeleton, SkeletonCard } from "components"
import { PATHS } from "data"
import { getTimeFromIso, getDateFromIso } from "utils"

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

    const isoDateLastMessage = new Date(
        conversation?.messages[conversation?.messages?.length - 1].updatedAt
    )

    const dateLastMessage = getDateFromIso(isoDateLastMessage)
    const today = getDateFromIso(new Date())

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

                <Text maxLines={1}>
                    {
                        conversation.messages[conversation.messages.length - 1]
                            .body
                    }
                </Text>

                <Text tag="small" color="gray">
                    <Text tag="em">
                        {dateLastMessage === today
                            ? "Today"
                            : convertDateShort(new Date(dateLastMessage))}{" "}
                        at {getTimeFromIso(isoDateLastMessage)}
                    </Text>
                </Text>
            </CardContent>

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
    return (
        <SkeletonCard padding="xs" gap="xs" isShining>
            <Skeleton width={48} height={48} borderRadius="circle" />

            <CardContent $isSkeleton>
                <Skeleton height={24} width="40%" />
                <Skeleton height={22} width="80%" />
                <Skeleton height={15} width="10%" />
            </CardContent>
        </SkeletonCard>
    )
}
