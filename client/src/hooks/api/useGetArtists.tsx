/*=============================================== useGetArtists ===============================================*/

import { useState, useEffect } from "react"
import type { AxiosError } from "axios"

import { userService } from "api"

import { useQueryParams } from "hooks"
import { getMinMaxPrices } from "utils"

import type { UserType, SortType, PricesType } from "types"

interface useGetArtistsProps {
    sort?: SortType | undefined
    selectedCity?: string
    selectedGenre?: string
}

export const useGetArtists = ({
    selectedCity,
    selectedGenre,
    sort,
}: useGetArtistsProps) => {
    const { city, genre, query } = useQueryParams()

    const [artists, setArtists] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [prices, setPrices] = useState<PricesType>({
        minPrice: 0,
        maxPrice: 0,
        globalMinPrice: 0,
        globalMaxPrice: 0,
    })
    const [errorMessage, setErrorMessage] = useState<AxiosError | undefined>(
        undefined
    )

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

                    if (loading && artistsRes?.length) {
                        setPrices({
                            minPrice: getMinMaxPrices(artistsRes).minPrice || 0,
                            maxPrice: getMinMaxPrices(artistsRes).maxPrice || 0,
                            globalMinPrice:
                                getMinMaxPrices(artistsRes).minPrice || 0,
                            globalMaxPrice:
                                getMinMaxPrices(artistsRes).maxPrice || 0,
                        })
                        setLoading(false)
                    } else {
                        setLoading(false)
                    }
                })
                .catch(err => {
                    setErrorMessage(err)
                    setLoading(false)
                })

        getData()
    }, [city, genre, loading, query, selectedCity, selectedGenre, sort])

    return {
        artists,
        loading,
        prices,
        setPrices,
        errorMessage,
    }
}
