/*=============================================== AllArtists ===============================================*/

import { Page, SrOnly, Main, Aside, Flexbox } from "components"
import { ArtistsFilters } from "pages/AllArtists/ArtistsFilters"
import { ArtistsList } from "pages/AllArtists/ArtistsList"

import { SITE_DATA } from "data"

export const AllArtists = () => {
    return (
        <Page title="Artists" noMain>
            <Aside>
                <ArtistsFilters />
            </Aside>

            <Main>
                <SrOnly as="h1">All artists on {SITE_DATA.NAME}</SrOnly>

                <Flexbox flexDirection="column" gap="s" alignContent="stretch">
                    <ArtistsList />
                </Flexbox>
            </Main>
        </Page>
    )
}
