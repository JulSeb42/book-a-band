/*=============================================== Get cities and genres ===============================================*/

import { useState, useEffect } from "react"
import type { AxiosError } from "axios"

import { userService } from "api"

export const useCitiesGenres = () => {
    const [cities, setCities] = useState<string[]>([])
    const [genres, setGenres] = useState<string[]>([])
    const [error, setError] = useState<AxiosError | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        userService
            .allCities()
            .then(res => setCities(["All", ...res.data]))
            .catch(err => setError(err))

        userService
            .allGenres()
            .then(res => setGenres(["All", ...res.data]))
            .catch(err => setError(err))

        setLoading(false)
    }, [])

    return { cities, genres, loading, error }
}
