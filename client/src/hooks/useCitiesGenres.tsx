/*=============================================== Get cities and genres ===============================================*/

import { useState, useEffect } from "react"

import { userService } from "api"

export const useCitiesGenres = () => {
    const [cities, setCities] = useState<string[]>([])
    const [genres, setGenres] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userService
            .allCities()
            .then(res => setCities(["All", ...res.data]))
            .catch(err => console.log(err))

        userService
            .allGenres()
            .then(res => setGenres(["All", ...res.data]))
            .catch(err => console.log(err))

        setIsLoading(false)
    }, [])

    return { cities, genres, isLoading }
}
