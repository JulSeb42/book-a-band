/*=============================================== ConversationHeader ===============================================*/

import { Link } from "react-router-dom"

import { Avatar, Text, Skeleton, SkeletonCard, Flexbox } from "components"
import { PATHS } from "data"
import type { UserType } from "types"

interface ConversationHeaderProps {
    otherUser: UserType
    isLoading: boolean
}

export function ConversationHeader({
    otherUser,
    isLoading,
}: ConversationHeaderProps) {
    if (isLoading) return <ConversationHeaderSkeleton />

    return (
        <Flexbox gap="xs">
            <Avatar user={otherUser} size={36} isLink />

            <Text tag="h4" as="h1">
                Conversation with{" "}
                <Link to={PATHS.ARTIST(otherUser?._id)}>
                    {otherUser?.fullName}
                </Link>
            </Text>
        </Flexbox>
    )
}

function ConversationHeaderSkeleton() {
    return (
        <SkeletonCard gap="xs" isShining>
            <Skeleton width={36} height={36} borderRadius="circle" />
            <Skeleton width="70%" height={36} />
        </SkeletonCard>
    )
}
