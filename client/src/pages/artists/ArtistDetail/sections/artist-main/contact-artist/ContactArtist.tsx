/*=============================================== ContactArtist ===============================================*/

import { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Text, Skeleton } from "components"
import { ContactArtistContent } from "pages/artists/ArtistDetail/sections/artist-main/contact-artist/ContactArtistContent"
import { PATHS } from "data"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export const ContactArtist = ({ artist, isLoading }: ArtistSectionProps) => {
    const { isLoggedIn } = useContext(AuthContext) as AuthContextType

    if (isLoading) return <Skeleton height={44} width="60%" isShining />

    return (
        <>
            <Text tag="h3">Contact {artist?.fullName}</Text>

            {isLoggedIn ? (
                <ContactArtistContent artist={artist} isLoading={isLoading} />
            ) : (
                <Text>
                    Please <Link to={PATHS.LOGIN}>login</Link> to contact{" "}
                    {artist?.fullName}.
                </Text>
            )}
        </>
    )
}