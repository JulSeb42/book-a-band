/*=============================================== ArtistsList ===============================================*/

import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { userService } from "api"

import { Tabs, ArtistsListAdmin, Text } from "components"

import type { UserType } from "types"
import type { TabItemType } from "components/types"

type TabParamType = "all" | "approved" | "pending"

export const ArtistsTabs = () => {
    const [searchParams] = useSearchParams()
    const tab = (searchParams.get("tab") || "all") as TabParamType

    const [artists, setArtists] = useState<UserType[]>([])
    const [approvedArtists, setApprovedArtists] = useState<UserType[]>([])
    const [pendingArtists, setPendingArtists] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    )

    useEffect(() => {
        userService
            .artistsAdmin({})
            .then(res => {
                setArtists(res.data)
            })
            .catch(err => {
                setErrorMessage(err.response.data.message)
                if (loading) setLoading(false)
            })

        userService
            .artistsAdmin({ isApproved: true })
            .then(res => setApprovedArtists(res.data))
            .catch(err => {
                setErrorMessage(err.response.data.message)
                if (loading) setLoading(false)
            })

        userService
            .artistsAdmin({ isApproved: false })
            .then(res => {
                setPendingArtists(res.data)
                setLoading(false)
            })
            .catch(err => {
                setErrorMessage(err.response.data.message)
                if (loading) setLoading(false)
            })
    }, [loading, tab])

    if (loading) return null // TODO: Add skeleton

    if (errorMessage)
        return <Text>Error while fetching users: {errorMessage}</Text>

    const tabs: TabItemType[] = [
        {
            id: 0,
            title: "All",
            content: <ArtistsListAdmin artists={artists} />,
        },
        {
            id: 1,
            title: "Approved",
            content: <ArtistsListAdmin artists={approvedArtists} />,
        },
        {
            id: 2,
            title: "Pending",
            content: <ArtistsListAdmin artists={pendingArtists} />,
        },
    ]

    return <Tabs tabs={tabs} defaultTab={tab} />
}
