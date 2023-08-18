/*=============================================== ConversationCard component ===============================================*/

import { useContext } from "react"
import { convertDateShort } from "ts-utils-julseb"

import { AuthContext, type AuthContextType } from "context"

import { Avatar, Text, Badge, Skeleton, SkeletonCard } from "components"
import { DeleteConversation } from "components/conversation/ConversationCard/DeleteConversation"
import { PATHS } from "data"
import { getTimeFromIso, getDateFromIso } from "utils"

import {
    StyledConversationCard,
    CardContent,
    BadgeContainer,
    CardContainer,
} from "components/conversation/ConversationCard/styles"
import type { ConversationCardProps } from "components/conversation/ConversationCard/types"

export function ConversationCard({
    conversation,
    setLoading,
}: ConversationCardProps) {
    const { user } = useContext(AuthContext) as AuthContextType

    const conversationUser =
        user?._id === conversation.user1._id
            ? conversation.user2
            : conversation.user1

    const isoDateLastMessage = conversation?.messages?.length
        ? new Date(
              conversation?.messages[
                  conversation?.messages?.length - 1
              ].updatedAt
          )
        : new Date(conversation?.createdAt)

    const dateLastMessage = getDateFromIso(isoDateLastMessage)
    const today = getDateFromIso(new Date())

    const name = () => (
        <Text tag="h6" maxLines={1}>
            {conversationUser.fullName}
        </Text>
    )

    return (
        <CardContainer>
            <StyledConversationCard to={PATHS.CONVERSATION(conversation._id)}>
                <Avatar user={conversationUser} size={48} />

                <CardContent>
                    {(conversation.user1._id === user?._id &&
                        !conversation.readUser1) ||
                    (conversation.user2._id === user?._id &&
                        !conversation.readUser2) ? (
                        <BadgeContainer>
                            {name()}

                            <Badge />
                        </BadgeContainer>
                    ) : (
                        name()
                    )}

                    <Text maxLines={1}>
                        {conversation.messages.length ? (
                            conversation.messages[
                                conversation.messages.length - 1
                            ].body
                        ) : (
                            <Text tag="em" color="gray">
                                No message
                            </Text>
                        )}
                    </Text>

                    <Text tag="small" color="gray">
                        <Text tag="em">
                            {dateLastMessage === today
                                ? "Today"
                                : convertDateShort(
                                      new Date(dateLastMessage)
                                  )}{" "}
                            at {getTimeFromIso(isoDateLastMessage)}
                        </Text>
                    </Text>
                </CardContent>
            </StyledConversationCard>

            <DeleteConversation
                id={conversation._id}
                otherUser={conversationUser}
                setLoading={setLoading}
            />
        </CardContainer>
    )
}

export function ConversationCardSkeleton() {
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
