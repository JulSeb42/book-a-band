/*=============================================== SocialLinks ===============================================*/

import { Flexbox, SocialLink, Skeleton, SkeletonCard } from "components"

interface SocialLinksListProps {
    facebook?: string
    instagram?: string
    youtube?: string
    isLoading?: boolean
}

export function SocialLinksList({
    facebook,
    instagram,
    youtube,
    isLoading,
}: SocialLinksListProps) {
    if (isLoading)
        return (
            <SkeletonCard
                gap="xs"
                alignItems="center"
                flexWrap="wrap"
                isShining
            >
                <Skeleton width={48} height={48} borderRadius="m" />
                <Skeleton width={48} height={48} borderRadius="m" />
                <Skeleton width={48} height={48} borderRadius="m" />
            </SkeletonCard>
        )

    if (!facebook && !instagram && !youtube) return null

    return (
        <Flexbox gap="xs" alignItems="center" flexWrap="wrap">
            {facebook && <SocialLink url={facebook} site="facebook" />}
            {instagram && <SocialLink url={instagram} site="instagram" />}
            {youtube && <SocialLink url={youtube} site="youtube" />}
        </Flexbox>
    )
}
