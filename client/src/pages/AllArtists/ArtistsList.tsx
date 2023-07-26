/*=============================================== ArtistsList ===============================================*/

import { useState, useEffect, Fragment } from "react"
import { useSearchParams } from "react-router-dom"
import { generateNumbers } from "ts-utils-julseb"

import { userService } from "api"

import { ArtistCard, Hr, Text, ArtistCardSkeleton } from "components"

import type { UserType } from "types"

export const ArtistsList = () => {
    const [searchParams] = useSearchParams()
    const city: string | undefined = searchParams.get("city") || undefined
    const genre: string | undefined = searchParams.get("genre") || undefined
    const query: string | undefined = searchParams.get("query") || undefined

    const [artists, setArtists] = useState<UserType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userService
            .allArtists({ city, genre, query })
            .then(res => setArtists(res.data))
        setIsLoading(false)
    }, [city, genre, query])

    if (isLoading) return <ArtistsListSkeleton />

    if (!artists.length) return <Text>No artist yet.</Text>

    return artists.map((artist, i) => (
        <Fragment key={artist._id}>
            <ArtistCard artist={artist} />

            {i !== artists.length - 1 && <Hr />}
        </Fragment>
    ))
}

const ArtistsListSkeleton = () => {
    const numbers = generateNumbers(0, 4)

    return numbers.map((n, i) => (
        <Fragment key={n}>
            <ArtistCardSkeleton />

            {i !== numbers.length - 1 && <Hr />}
        </Fragment>
    ))
}
