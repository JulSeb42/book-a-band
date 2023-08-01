/*=============================================== ArtistDetail ===============================================*/

import { useParams } from "react-router-dom"

import { userService } from "api"

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
import { useFetch } from "hooks"

import type { UserType } from "types"

export const ArtistDetail = () => {
    const { id } = useParams<{ id: string }>()

    const {
        response: artist,
        loading,
        error,
    } = useFetch<UserType>(userService.getUser(id!))

    return (
        <Page title={artist ? artist.fullName : "Artist"} error={error} noMain>
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
