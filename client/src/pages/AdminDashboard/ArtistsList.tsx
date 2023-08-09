/*=============================================== ArtistsList ===============================================*/

import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { userService } from "api"

import { Text, ArtistLine } from "components"

import type { UserType } from "types"

type TabParamType = "all" | "approved" | "not-approved"

export const ArtistsList = () => {
    const [searchParams] = useSearchParams()
    const tab = (searchParams.get("tab") || "all") as TabParamType

    const [artists, setArtists] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    )

    useEffect(() => {
        userService
            .artistsAdmin({
                isApproved:
                    tab === "approved"
                        ? true
                        : tab === "not-approved"
                        ? false
                        : undefined,
            })
            .then(res => {
                setArtists(res.data)
                if (loading) setLoading(false)
            })
            .catch(err => {
                setErrorMessage(err.response.data.message)
                if (loading) setLoading(false)
            })
    }, [loading, tab])

    if (loading) return null // TODO: Add skeleton

    if (errorMessage)
        return <Text>Error while fetching users: {errorMessage}</Text>

    return (
        <>
            {artists?.map(artist => (
                <ArtistLine artist={artist} key={artist._id} />
            ))}
        </>
    )
}
