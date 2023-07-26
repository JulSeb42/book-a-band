/*=============================================== ArtistsList ===============================================*/

import { useState, useEffect, Fragment } from "react"
import { generateNumbers } from "ts-utils-julseb"

import { userService } from "api"

import {
    ArtistCard,
    Hr,
    Text,
    ArtistCardSkeleton,
    Pagination,
} from "components"
import { usePaginatedData, useQueryParams } from "hooks"

import type { UserType } from "types"

export const ArtistsList = () => {
    const { city, genre, query, sort } = useQueryParams()

    const [artists, setArtists] = useState<UserType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userService
            .allArtists({ city, genre, query, sort })
            .then(res => setArtists(res.data))
        setIsLoading(false)
    }, [city, genre, query, sort])

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
