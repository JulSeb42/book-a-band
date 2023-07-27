/*=============================================== ArtistTitle ===============================================*/

import { Text, Skeleton } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/artist-sections-types"

export const ArtistTitle = ({ artist, isLoading }: ArtistSectionProps) => {
    if (isLoading) return <Skeleton height={60} width="45%" isShining />

    return <Text tag="h1">{artist?.fullName}</Text>
}
