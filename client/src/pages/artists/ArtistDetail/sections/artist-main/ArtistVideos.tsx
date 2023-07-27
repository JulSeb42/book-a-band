/*=============================================== ArtistVideos ===============================================*/

import { uuid } from "ts-utils-julseb"

import { Flexbox, Text, Youtube } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/artist-sections-types"

export const ArtistVideos = ({ artist, isLoading }: ArtistSectionProps) => {
    if (isLoading || !artist?.youtubeLinks.length) return null

    return (
        <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
            <Text tag="h4">Videos</Text>

            {artist?.youtubeLinks.map(link => (
                <Youtube src={link} key={uuid()} />
            ))}
        </Flexbox>
    )
}
