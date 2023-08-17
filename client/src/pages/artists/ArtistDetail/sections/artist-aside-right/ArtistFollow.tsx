/*=============================================== ArtistFollow ===============================================*/

import { Text, Flexbox, SocialLinksList } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export function ArtistFollow({ artist, isLoading }: ArtistSectionProps) {
    const title = "Follow"

    if (isLoading) return <ArtistFollowSkeleton title={title} />

    if (!artist?.facebookUrl && !artist?.instagramUrl && !artist?.youtubeUrl)
        return null

    return (
        <Flexbox flexDirection="column" gap="xs" alignItems="stretch">
            <Text tag="h4">{title}</Text>

            <SocialLinksList
                facebook={artist?.facebookUrl}
                instagram={artist?.instagramUrl}
                youtube={artist?.youtubeUrl}
            />
        </Flexbox>
    )
}

function ArtistFollowSkeleton({ title }: { title: string }) {
    return (
        <Flexbox flexDirection="column" gap="xs" alignItems="stretch">
            <Text tag="h4">{title}</Text>

            <SocialLinksList isLoading />
        </Flexbox>
    )
}
