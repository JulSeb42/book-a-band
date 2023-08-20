/*=============================================== Avatar ===============================================*/

import { Image, Skeleton } from "components"
import { PATHS } from "data"

import type { SkeletonProps } from "components/ui/Skeleton/types"
import type { ImageProps } from "components/media/Image/types"

import { StyledLink } from "components/user/Avatar/styles"
import type { AvatarProps } from "components/user/Avatar/types"

export function Avatar({ user, size = 120, isLoading, isLink }: AvatarProps) {
    const commonProps = {
        width: size,
        height: size,
        borderRadius: "circle",
    } as SkeletonProps & ImageProps

    const avatarImg = () => (
        <Image
            src={user.avatar}
            alt={`Avatar ${user.fullName}`}
            fit="cover"
            {...commonProps}
        />
    )

    if (isLoading) return <Skeleton isShining {...commonProps} />

    if (isLink)
        return (
            <StyledLink to={PATHS.ARTIST(user._id)} $size={size}>
                {avatarImg()}
            </StyledLink>
        )

    return avatarImg()
}
