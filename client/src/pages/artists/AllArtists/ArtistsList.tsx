/*=============================================== ArtistsList ===============================================*/

import { Fragment } from "react"
import { generateNumbers } from "ts-utils-julseb"

import {
    ArtistCard,
    Hr,
    Text,
    ArtistCardSkeleton,
    Pagination,
} from "components"
import { usePaginatedData } from "hooks"
import { filterByPrice } from "utils"

import type { UserType, PricesType, ServerErrorType } from "types"

interface ArtistsListProps {
    artists: UserType[]
    isLoading: boolean
    error: ServerErrorType
    prices: PricesType
}

export function ArtistsList({
    artists,
    isLoading,
    error,
    prices,
}: ArtistsListProps) {
    const { paginatedData, totalPages } = usePaginatedData<UserType>(
        filterByPrice(artists, prices)
    )

    if (isLoading) return <ArtistsListSkeleton />

    if (error)
        return (
            <Text>
                Error while fetching artists: {error.response.data.message}
            </Text>
        )

    if (!artists.length) return <Text>No artist yet.</Text>

    if (!paginatedData.length)
        return <Text>Your search did not return any result.</Text>

    return (
        <Fragment>
            {paginatedData.map((artist, i) => (
                <Fragment key={artist._id}>
                    <ArtistCard artist={artist} />

                    {i !== paginatedData.length - 1 && <Hr />}
                </Fragment>
            ))}

            <Pagination totalPages={totalPages} />
        </Fragment>
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
