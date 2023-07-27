/*=============================================== Avatar ===============================================*/

import { Image, Skeleton } from "components"

import type { SkeletonProps } from "components/ui/Skeleton/types"
import type { ImageProps } from "components/media/Image/types"

interface AvatarProps {
    src: string
    username?: string
    size?: string | number
    isLoading?: boolean
}

export const Avatar = ({
    src,
    username,
    size = 120,
    isLoading,
}: AvatarProps) => {
    const commonProps = {
        width: size,
        height: size,
        borderRadius: "circle",
    } as SkeletonProps & ImageProps

    if (isLoading) return <Skeleton isShining {...commonProps} />

    return (
        <Image
            src={src}
            alt={username ? `Avatar ${username}` : undefined}
            fit="cover"
            {...commonProps}
        />
    )
}
