/*=============================================== AllArtists ===============================================*/

import { useState } from "react"

import { Page, SrOnly, Main, Aside, Flexbox } from "components"
import { ArtistsFilters } from "pages/artists/AllArtists/ArtistsFilters"
import { ArtistsList } from "pages/artists/AllArtists/ArtistsList"

import { SITE_DATA } from "data"
import { useFetchArtists } from "hooks"

import type { SortType } from "types"

export const AllArtists = () => {
    const [sort, setSort] = useState<SortType | undefined>(undefined)

    const [selectedCity, setSelectedCity] = useState<string>("All")
    const [selectedGenre, setSelectedGenre] = useState<string>("All")

    const { artists, prices, setPrices, loading, errorMessage } =
        useFetchArtists({ sort, selectedCity, selectedGenre })

    return (
        <Page title="Artists" noMain>
            <Aside>
                <ArtistsFilters
                    sort={sort}
                    setSort={setSort}
                    prices={prices}
                    setPrices={setPrices}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                    isLoading={loading}
                />
            </Aside>

            <Main>
                <SrOnly as="h1">All artists on {SITE_DATA.NAME}</SrOnly>

                <Flexbox flexDirection="column" gap="s" alignContent="stretch">
                    <ArtistsList
                        artists={artists}
                        isLoading={loading}
                        error={errorMessage}
                        prices={prices}
                    />
                </Flexbox>
            </Main>
        </Page>
    )
}
