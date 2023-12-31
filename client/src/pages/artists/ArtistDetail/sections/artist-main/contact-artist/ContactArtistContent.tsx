/*=============================================== ContactArtistForm ===============================================*/

import { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"

import { Text } from "components"
import { ContactArtistForm } from "pages/artists/ArtistDetail/sections/artist-main/contact-artist/ContactArtistForm"
import { PATHS } from "data"

import type { ConversationType, UserType } from "types"

interface ContactArtistFormProps {
    artist: UserType
    isLoading: boolean
}

export function ContactArtistContent({
    artist,
    isLoading,
}: ContactArtistFormProps) {
    const { user } = useContext(AuthContext) as AuthContextType

    if (artist?._id === user?._id)
        return <Text>You can not contact yourself!</Text>

    if (!user?.verified)
        return (
            <Text>
                Please verify your account to contact {artist?.fullName}.
            </Text>
        )

    if (isLoading) return null

    const conversation: ConversationType | undefined =
        user?.conversations?.find(
            conversation =>
                (conversation?.user1?._id === user?._id &&
                    conversation?.user2?._id === artist?._id) ||
                (conversation?.user2?._id === user?._id &&
                    conversation?.user1?._id === artist?._id)
        )

    if (conversation)
        return (
            <Text>
                You already contacted {artist?.fullName}.{" "}
                <Link to={PATHS.CONVERSATION(conversation?._id)}>
                    Go to the conversation.
                </Link>
            </Text>
        )

    return <ContactArtistForm artist={artist} />
}
