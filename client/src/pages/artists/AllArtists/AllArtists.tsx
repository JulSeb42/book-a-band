/*=============================================== AllArtists ===============================================*/

import { SrOnly, Main, Aside, Flexbox } from "tsx-library-julseb"

import { Page } from "components"
import { ArtistsList } from "pages/artists/AllArtists/ArtistsList"
import { ArtistsFilters } from "pages/artists/AllArtists/ArtistsFilters"

import { SITE_DATA } from "data"

export const AllArtists = () => {
    const minHeight = "calc(100vh - 72px)"

    return (
        <Page title="All artists" template="2cols">
            <Aside minHeight={minHeight}>
                <ArtistsFilters />
            </Aside>

            <Main minHeight={minHeight}>
                <SrOnly as="h1">All artists from {SITE_DATA.NAME}</SrOnly>

                <Flexbox flexDirection="column" gap="l" alignItems="stretch">
                    <ArtistsList />
                </Flexbox>
            </Main>
        </Page>
    )
}
