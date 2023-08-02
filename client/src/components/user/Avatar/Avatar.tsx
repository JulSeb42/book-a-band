/*=============================================== Avatar ===============================================*/

import { Image, Skeleton } from "components"

import type { SkeletonProps } from "components/ui/Skeleton/types"
import type { ImageProps } from "components/media/Image/types"

import { StyledLink } from "components/user/Avatar/styles"
import type { AvatarProps } from "components/user/Avatar/types"

export const Avatar = ({
    src,
    username,
    size = 120,
    isLoading,
    to,
}: AvatarProps) => {
    const commonProps = {
        width: size,
        height: size,
        borderRadius: "circle",
    } as SkeletonProps & ImageProps

    const avatarImg = () => (
        <Image
            src={src}
            alt={`Avatar ${username}`}
            fit="cover"
            {...commonProps}
        />
    )

    if (isLoading) return <Skeleton isShining {...commonProps} />

    if (to)
        return (
            <StyledLink to={to} $size={size}>
                {avatarImg()}
            </StyledLink>
        )

    return avatarImg()
}
