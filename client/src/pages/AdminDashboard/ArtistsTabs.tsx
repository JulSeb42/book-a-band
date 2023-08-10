/*=============================================== ArtistsList ===============================================*/

import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { userService } from "api"

import {
    Text,
    ArtistsListAdmin,
    TabsContainer,
    TabsButtonsContainer,
    TabButton,
    Tab,
} from "components"

import type { UserType, AdminTabType } from "types"

export const ArtistsTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tab = (searchParams.get("tab") || "approved") as AdminTabType

    const [artists, setArtists] = useState<UserType[]>([])
    const [artistsLengths, setArtistsLengths] = useState({
        approved: 0,
        pending: 0,
        rejected: 0,
    })
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    )

    useEffect(() => {
        userService
            .artistsAdmin({
                isApproved:
                    tab === "pending"
                        ? "undefined"
                        : tab === "rejected"
                        ? "false"
                        : "true",
            })
            .then(res => {
                const {
                    artists,
                    approvedArtists,
                    pendingArtists,
                    rejectedArtists,
                } = res.data

                const lengths = {
                    approved: approvedArtists,
                    pending: pendingArtists,
                    rejected: rejectedArtists,
                }

                if (loading) {
                    setArtists(artists)
                    setArtistsLengths(lengths)

                    setLoading(false)
                }

                if (isButtonLoading) {
                    setArtists(artists)
                    setArtistsLengths(lengths)
                    setIsButtonLoading(false)
                }
            })
            .catch(err => {
                console.log(err)
                setErrorMessage(err.response.data.message)
            })

        if (tab !== "approved" && tab !== "pending" && tab !== "rejected") {
            setSearchParams({ tab: "approved" })
        }
    }, [tab, isButtonLoading, loading, setSearchParams])

    if (loading) return null // TODO: Add skeleton

    if (errorMessage)
        return <Text>Error while fetching artists: {errorMessage}</Text>

    const { approved, pending, rejected } = artistsLengths

    return (
        <TabsContainer>
            <TabsButtonsContainer>
                {(approved > 0 || tab === "approved") && (
                    <TabButton
                        onClick={() => {
                            setSearchParams({ tab: "approved" })
                            setIsButtonLoading(true)
                        }}
                        isActive={tab === "approved"}
                    >
                        Approved ({approved} users)
                    </TabButton>
                )}

                {(pending > 0 || tab === "pending") && (
                    <TabButton
                        onClick={() => {
                            setSearchParams({ tab: "pending" })
                            setIsButtonLoading(true)
                        }}
                        isActive={tab === "pending"}
                    >
                        Pending ({pending} users)
                    </TabButton>
                )}

                {(rejected > 0 || tab === "rejected") && (
                    <TabButton
                        onClick={() => {
                            setSearchParams({ tab: "rejected" })
                            setIsButtonLoading(true)
                        }}
                        isActive={tab === "rejected"}
                    >
                        Rejected ({rejected} users)
                    </TabButton>
                )}
            </TabsButtonsContainer>

            <Tab
                isActive={
                    tab === "approved" ||
                    tab === "pending" ||
                    tab === "rejected"
                }
            >
                <ArtistsListAdmin
                    artists={artists}
                    isButtonLoading={isButtonLoading}
                    setIsButtonLoading={setIsButtonLoading}
                />
            </Tab>
        </TabsContainer>
    )
}
