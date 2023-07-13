/*=============================================== AllArtists ===============================================*/

import { Text } from "tsx-library-julseb"

import { Page } from "components"
import { ArtistsList } from "pages/artists/AllArtists/ArtistsList"

export const AllArtists = () => {
    return (
        <Page title="All Users">
            <Text tag="h1">All users</Text>
            <ArtistsList />
        </Page>
    )
}
