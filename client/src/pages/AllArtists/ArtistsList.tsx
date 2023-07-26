/*=============================================== ArtistsList ===============================================*/

import { useState, useEffect, Fragment } from "react"
import { useSearchParams } from "react-router-dom"
import { generateNumbers } from "ts-utils-julseb"

import { userService } from "api"

import {
    ArtistCard,
    Hr,
    Text,
    ArtistCardSkeleton,
    Pagination,
} from "components"

import type { UserType } from "types"
import { usePaginatedData } from "hooks"

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

    const { paginatedData, totalPages } = usePaginatedData(artists)

    if (isLoading) return <ArtistsListSkeleton />

    if (!artists.length) return <Text>No artist yet.</Text>

    return (
        <>
            {paginatedData.map((artist, i) => (
                <Fragment key={artist._id}>
                    <ArtistCard artist={artist} />

                    {i !== paginatedData.length - 1 && <Hr />}
                </Fragment>
            ))}

            {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </>
    )
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
