/*=============================================== ConversationHeader ===============================================*/

import { Link } from "react-router-dom"

import { Avatar, Text, Skeleton, SkeletonCard, Flexbox } from "components"
import { PATHS } from "data"
import type { UserType } from "types"

interface ConversationHeaderProps {
    otherUser: UserType
    isLoading: boolean
}

export const ConversationHeader = ({
    otherUser,
    isLoading,
}: ConversationHeaderProps) => {
    if (isLoading) return <ConversationHeaderSkeleton />

    return (
        <Flexbox gap="xs">
            <Avatar
                src={otherUser?.avatar}
                size={36}
                username={otherUser?.fullName}
            />

            <Text tag="h4" as="h1">
                Conversation with{" "}
                <Link to={PATHS.ARTIST(otherUser?._id)}>
                    {otherUser?.fullName}
                </Link>
            </Text>
        </Flexbox>
    )
}

const ConversationHeaderSkeleton = () => {
    return (
        <SkeletonCard gap="xs" isShining>
            <Skeleton width={36} height={36} borderRadius="circle" />
            <Skeleton width="70%" height={36} />
        </SkeletonCard>
    )
}
