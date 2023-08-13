/*=============================================== ArtistLineApprove component ===============================================*/

import { useState } from "react"
import { Link } from "react-router-dom"

import { userService } from "api"

import { Avatar, Flexbox, ButtonIcon } from "components"
import { PATHS } from "data"
import { toast } from "utils"

import type { UserType } from "types"

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

    const handleClick = (isApproved: boolean) => {
        setIsChangeLoading(true)
        userService
            .approveArtist(artist._id, { isApproved })
            .then(res => setArtist(res.data))
            .catch(err => {
                toast.error("An error occured, check console.")
                console.log(err)
            })
    }

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

            <Flexbox gap="xs" alignItems="center">
                <ButtonIcon
                    icon="check"
                    size={24}
                    color="success"
                    onClick={() => handleClick(true)}
                    disabled={artist.isApproved === true || isChangeLoading}
                />

                <ButtonIcon
                    icon="close"
                    size={24}
                    color="danger"
                    onClick={() => handleClick(false)}
                    disabled={artist.isApproved === false || isChangeLoading}
                />
            </Flexbox>
        </StyledArtistLineApprove>
    )
}
