/*=============================================== AllArtists ===============================================*/

import { useState, useEffect } from "react"

import { userService } from "api"

import { Page, SrOnly, Main, Aside, Flexbox } from "components"
import { ArtistsFilters } from "pages/artists/AllArtists/ArtistsFilters"
import { ArtistsList } from "pages/artists/AllArtists/ArtistsList"
import { SITE_DATA } from "data"
import { useQueryParams } from "hooks"
import { getMinMaxPrices } from "utils"

import type { SortType, UserType, ServerErrorType, PricesType } from "types"

export function AllArtists() {
    const { city, genre, query } = useQueryParams()

    const [artists, setArtists] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)

    const [errorMessage, setErrorMessage] = useState<ServerErrorType>(undefined)

    const [prices, setPrices] = useState<PricesType>({
        minPrice: 0,
        maxPrice: 0,
        globalMinPrice: 0,
        globalMaxPrice: 0,
    })
    const [sort, setSort] = useState<SortType | undefined>(undefined)
    const [selectedCity, setSelectedCity] = useState<string>("All")
    const [selectedGenre, setSelectedGenre] = useState<string>("All")

    useEffect(() => {
        const getCity = () => {
            if (selectedCity !== "All") return selectedCity
            if (city) return city
            return "undefined"
        }

        const getGenre = () => {
            if (selectedGenre !== "All") return selectedGenre
            if (genre) return genre
            return "undefined"
        }

        const getData = async () =>
            await userService
                .artists({
                    city: getCity(),
                    genre: getGenre(),
                    query,
                    sort,
                })
                .then(res => {
                    const artistsRes: UserType[] = res.data
                    setArtists(artistsRes)
                    setPrices({
                        minPrice: getMinMaxPrices(artistsRes).minPrice || 0,
                        maxPrice: getMinMaxPrices(artistsRes).maxPrice || 0,
                        globalMinPrice:
                            getMinMaxPrices(artistsRes).minPrice || 0,
                        globalMaxPrice:
                            getMinMaxPrices(artistsRes).maxPrice || 0,
                    })
                    setLoading(false)
                })
                .catch(err => {
                    setErrorMessage(err)
                    setLoading(false)
                })

        if (loading) getData()
    }, [city, genre, loading, query, selectedCity, selectedGenre, sort])

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
                    setIsLoading={setLoading}
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
