/*=============================================== ArtistTitle ===============================================*/

import { useContext } from "react"

import { AuthContext, type AuthContextType } from "context"

import { Text, Skeleton, Flexbox } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export function ArtistTitle({ artist, isLoading }: ArtistSectionProps) {
    const { user } = useContext(AuthContext) as AuthContextType

    if (isLoading) return <Skeleton height={60} width="45%" isShining />

    if (user?._id !== artist?._id)
        return <Text tag="h1">{artist?.fullName}</Text>

    return (
        <Flexbox gap="xxs" flexDirection="column" alignItems="stretch">
            <Text tag="h1">{artist?.fullName}</Text>

            <Text>
                Your profile is {artist?.isVisible ? "" : "not "}visible.
            </Text>
        </Flexbox>
    )
}
