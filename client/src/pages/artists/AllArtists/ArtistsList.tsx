/*=============================================== ArtistsList ===============================================*/

import { Fragment } from "react"
import { useSearchParams } from "react-router-dom"
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
    const [searchParams] = useSearchParams()
    const city = searchParams.get("city") || undefined
    const genre = searchParams.get("genre") || undefined
    const query = searchParams.get("query") || undefined

    const { response, error, loading } = useFetch<AxiosResponse>(
        userService.allArtists()
    )
    const artists: UserType[] = response?.data

    const { getPaginatedData, getNumberOfPages } = usePaginatedData(artists, 10)

    // @ts-ignore
    const queries: string[][] = [
        city ? ["city", city] : null,
        genre ? ["genre", genre] : null,
        query ? ["query", query] : null,
    ].filter(param => param !== null)

    if (loading) return <UsersListSkeleton />

    if (error) return <Text>Error while fetching users: {error}</Text>

    if (!getPaginatedData()?.length) return <Text>No artist yet.</Text>

    return (
        <>
            {getPaginatedData().map((user, i) => (
                <Fragment key={user?._id}>
                    <ArtistCard artist={user} key={user._id} />
                    {i !== artists?.length - 1 && <Hr />}
                </Fragment>
            ))}

            {getNumberOfPages() > 1 && (
                <Pagination
                    totalPages={getNumberOfPages()}
                    icons={{ prev: "arrow-left", next: "arrow-right" }}
                    queries={queries}
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
