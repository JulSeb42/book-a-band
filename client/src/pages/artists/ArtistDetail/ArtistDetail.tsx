/*=============================================== ArtistDetail ===============================================*/

import { useContext } from "react"
import { useParams } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"

import { Page, Main, Flexbox, Aside, Text } from "components"
import { ArtistAsideLeft } from "pages/artists/ArtistDetail/sections/ArtistAsideLeft"
import {
    ArtistTitle,
    ArtistInfos,
    ArtistBio,
    ArtistVideos,
    ContactArtist,
} from "pages/artists/ArtistDetail/sections/artist-main"
import {
    ArtistAvailabilities,
    ArtistFollow,
} from "pages/artists/ArtistDetail/sections/artist-aside-right"
import { NotFound } from "pages/NotFound"
import { useFetchUser } from "hooks"

export function ArtistDetail() {
    const { id } = useParams<{ id: string }>()

    const { user } = useContext(AuthContext) as AuthContextType

    const { user: artist, loading, errorMessage } = useFetchUser(id || "")

    if (
        user?._id !== id &&
        !artist?.isVisible &&
        user?.role !== "admin" &&
        !loading
    )
        return <NotFound />

    return (
        <Page
            title={artist ? artist.fullName : "Artist"}
            error={errorMessage}
            noMain
        >
            <ArtistAsideLeft artist={artist!} isLoading={loading} />

            <Main>
                <ArtistTitle artist={artist!} isLoading={loading} />

                <Flexbox flexDirection="column" alignItems="stretch" gap="xxs">
                    <ArtistInfos artist={artist!} isLoading={loading} />
                </Flexbox>

                <ArtistBio artist={artist!} isLoading={loading} />

                <ArtistVideos artist={artist!} isLoading={loading} />

                <Flexbox flexDirection="column" alignItems="stretch" gap="xs">
                    <ContactArtist artist={artist!} isLoading={loading} />
                </Flexbox>
            </Main>

            <Aside>
                <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                    <Text tag="h4">Availabilities</Text>

                    <Flexbox
                        alignItems="stretch"
                        flexDirection="column"
                        gap="xxs"
                    >
                        <ArtistAvailabilities
                            artist={artist!}
                            isLoading={loading}
                        />
                    </Flexbox>
                </Flexbox>

                <ArtistFollow artist={artist!} isLoading={loading} />
            </Aside>
        </Page>
    )
}
