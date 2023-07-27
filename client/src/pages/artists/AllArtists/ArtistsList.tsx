/*=============================================== ArtistsList ===============================================*/

import { Fragment } from "react"
import type { AxiosError } from "axios"
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

import type { UserType, PricesType } from "types"

interface ArtistsListProps {
    artists: UserType[]
    isLoading: boolean
    error: AxiosError | undefined
    prices: PricesType
}

export const ArtistsList = ({
    artists,
    isLoading,
    error,
    prices,
}: ArtistsListProps) => {
    const { paginatedData, totalPages } = usePaginatedData(
        filterByPrice(artists, prices)
    )

    if (isLoading) return <ArtistsListSkeleton />

    if (error) return <Text>Error while fetching artists: {error.message}</Text>

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
