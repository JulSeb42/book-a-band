/*=============================================== ArtistsList ===============================================*/

import { Fragment } from "react"
import {
    useFetch,
    Text,
    generateNumbers,
    usePaginatedData,
    Pagination,
    Hr,
} from "tsx-library-julseb"
import type { AxiosResponse } from "axios"

import { userService } from "api"

import { ArtistCard, ArtistCardSkeleton } from "components"

import type { UserType } from "types"

export const ArtistsList = () => {
    const { response, error, loading } = useFetch<AxiosResponse>(
        userService.allArtists()
    )

    const { getPaginatedData, getNumberOfPages } = usePaginatedData(
        response?.data,
        10
    )
    const artists: UserType[] = getPaginatedData()

    if (loading) return <UsersListSkeleton />

    if (error) return <Text>Error while fetching users: {error}</Text>

    if (!artists?.length) return <Text>No artist yet.</Text>

    return (
        <>
            {artists.map((user, i) => (
                <Fragment key={user?._id}>
                    <ArtistCard artist={user} key={user._id} />
                    {i !== artists?.length - 1 && <Hr />}
                </Fragment>
            ))}

            {getNumberOfPages() > 1 && (
                <Pagination
                    totalPages={getNumberOfPages()}
                    icons={{ prev: "arrow-left", next: "arrow-right" }}
                />
            )}
        </>
    )
}

const UsersListSkeleton = () => {
    return (
        <>
            {generateNumbers(0, 4).map(n => (
                <ArtistCardSkeleton key={n} />
            ))}
        </>
    )
}
