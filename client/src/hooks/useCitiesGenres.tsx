/*=============================================== Get cities and genres ===============================================*/

import { useState, useEffect } from "react"
import type { AxiosError } from "axios"

import { userService } from "api"

type CitiesGenresErrorType = {
    cities: AxiosError | undefined
    genres: AxiosError | undefined
}

export const useCitiesGenres = () => {
    const [cities, setCities] = useState<string[]>([])
    const [genres, setGenres] = useState<string[]>([])
    const [error, setError] = useState<CitiesGenresErrorType>({
        cities: undefined,
        genres: undefined,
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            userService
                .allCities()
                .then(res => setCities(["All", ...res.data]))
                .catch(err =>
                    setError({
                        ...error,
                        cities: err,
                    })
                )

            userService
                .allGenres()
                .then(res => setGenres(["All", ...res.data]))
                .catch(err =>
                    setError({
                        ...error,
                        genres: err,
                    })
                )

            setLoading(false)
        }
    }, [error, loading])

    return { cities, genres, loading, error }
}
