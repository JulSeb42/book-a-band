/*=============================================== AllArtists ===============================================*/

import { Page, SrOnly, Main, Aside } from "components"
import { ArtistsFilters } from "pages/AllArtists/ArtistsFilters"

import { SITE_DATA } from "data"

export const AllArtists = () => {
    return (
        <Page title="Artists" noMain>
            <Aside>
                <ArtistsFilters />
            </Aside>

            <Main>
                <SrOnly as="h1">All artists on {SITE_DATA.NAME}</SrOnly>
            </Main>
        </Page>
    )
}
