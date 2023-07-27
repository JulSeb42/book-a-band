/*=============================================== ArtistDetail ===============================================*/

import { useParams } from "react-router-dom"

import { userService } from "api"

import { Page, Main, Flexbox } from "components"
import { ArtistAsideLeft } from "pages/artists/ArtistDetail/sections/ArtistAsideLeft"
import {
    ArtistTitle,
    ArtistInfos,
    ArtistBio,
} from "pages/artists/ArtistDetail/sections/artist-main"
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
            </Main>
        </Page>
    )
}
