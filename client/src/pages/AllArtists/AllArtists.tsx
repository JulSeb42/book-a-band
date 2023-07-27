/*=============================================== AllArtists ===============================================*/

import { useState, useEffect } from "react"
import type { AxiosError } from "axios"

import { userService } from "api"

import { Page, SrOnly, Main, Aside, Flexbox } from "components"
import { ArtistsFilters } from "pages/AllArtists/ArtistsFilters"
import { ArtistsList } from "pages/AllArtists/ArtistsList"

import { SITE_DATA } from "data"
import { getMinMaxPrices } from "utils"
import { useQueryParams } from "hooks"

import type { SortType, UserType, PricesType } from "types"

export const AllArtists = () => {
    const { city, genre, query } = useQueryParams()

    const [artists, setArtists] = useState<UserType[]>([])
    const [sort, setSort] = useState<SortType | undefined>(undefined)
    const [prices, setPrices] = useState<PricesType>({
        minPrice: 0,
        maxPrice: 0,
        globalMinPrice: 0,
        globalMaxPrice: 0,
    })
    const [selectedCity, setSelectedCity] = useState<string>("All")
    const [selectedGenre, setSelectedGenre] = useState<string>("All")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<AxiosError | undefined>(undefined)

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

        userService
            .allArtists({ city: getCity(), genre: getGenre(), query, sort })
            .then(res => {
                const artistsRes: UserType[] = res.data

                setArtists(artistsRes)

                if (isLoading)
                    setPrices({
                        minPrice: getMinMaxPrices(artistsRes).minPrice,
                        maxPrice: getMinMaxPrices(artistsRes).maxPrice,
                        globalMinPrice: getMinMaxPrices(artistsRes).minPrice,
                        globalMaxPrice: getMinMaxPrices(artistsRes).maxPrice,
                    })
            })
            .catch(err => setError(err))

        setIsLoading(false)
    }, [city, genre, query, selectedCity, selectedGenre, sort, isLoading])

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
                    isLoading={isLoading}
                />
            </Aside>

            <Main>
                <SrOnly as="h1">All artists on {SITE_DATA.NAME}</SrOnly>

                <Flexbox flexDirection="column" gap="s" alignContent="stretch">
                    <ArtistsList
                        artists={artists}
                        isLoading={isLoading}
                        error={error}
                        prices={prices}
                    />
                </Flexbox>
            </Main>
        </Page>
    )
}
