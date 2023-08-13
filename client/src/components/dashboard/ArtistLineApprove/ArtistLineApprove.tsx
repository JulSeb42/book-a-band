/*=============================================== ArtistLineApprove component ===============================================*/

import { useState, type ChangeEvent } from "react"
import { Link } from "react-router-dom"

import { userService } from "api"

import { Avatar, Flexbox } from "components"
import { Select } from "components/dashboard/SearchDashboard/Select"
import { PATHS } from "data"
import { toast } from "utils"

import type { AdminApproveStatusType, UserType } from "types"

import {
    StyledArtistLineApprove,
    Name,
} from "components/dashboard/ArtistLineApprove/styles"
import type { ArtistLineApproveProps } from "components/dashboard/ArtistLineApprove/types"

export const ArtistLineApprove = ({
    artist: artistData,
    isChangeLoading,
    setIsChangeLoading,
}: ArtistLineApproveProps) => {
    const [artist, setArtist] = useState<UserType>(artistData)

    const [status, setStatus] = useState<string>(
        artist.isApproved === true
            ? "approved"
            : artist.isApproved === false
            ? "rejected"
            : "pending"
    )

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)

        setIsChangeLoading(true)

        userService
            .approveArtist(artist._id, {
                isApproved: e.target.value === "approved" ? true : false,
            })
            .then(res => {
                setArtist(res.data)
            })
            .catch(err => {
                toast.error("An error occured, check console")
                console.log(err)
            })
    }

    const statuses: AdminApproveStatusType[] = [
        "approved",
        "pending",
        "rejected",
    ]

    return (
        <StyledArtistLineApprove>
            <Flexbox gap="xs">
                <Avatar
                    src={artist.avatar}
                    username={artist.fullName}
                    size={32}
                />

                <Name maxLines={1}>
                    <Link to={PATHS.ARTIST(artist._id)}>{artist.fullName}</Link>
                </Name>
            </Flexbox>

            <Select
                id="user-status"
                value={status}
                onChange={handleChange}
                options={
                    artist.isApproved === true || artist.isApproved === false
                        ? statuses.filter(status => status !== "pending")
                        : statuses
                }
                disabled={isChangeLoading}
            />
        </StyledArtistLineApprove>
    )
}
