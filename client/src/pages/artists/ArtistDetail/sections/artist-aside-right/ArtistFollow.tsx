/*=============================================== ArtistFollow ===============================================*/

import { Text, Flexbox, SocialLinksList } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export const ArtistFollow = ({ artist, isLoading }: ArtistSectionProps) => {
    const title = "Follow"

    if (isLoading)
        return (
            <Flexbox flexDirection="column" gap="xs" alignItems="stretch">
                <Text tag="h4">{title}</Text>

                <SocialLinksList isLoading />
            </Flexbox>
        )

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
