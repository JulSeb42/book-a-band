/*=============================================== ArtistLineApprove component ===============================================*/

import { useState } from "react"
import { Link } from "react-router-dom"

import { userService } from "api"

import { Avatar, Flexbox, ButtonIcon, Text } from "components"
import { PATHS } from "data"
import { FORM_VALIDATION } from "errors"
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

    const name = () => (
        <Name maxLines={1}>
            <Link to={PATHS.ARTIST(artist._id)}>{artist.fullName}</Link>
        </Name>
    )

    return (
        <StyledArtistLineApprove>
            <Flexbox gap="xs">
                <Avatar
                    src={artist.avatar}
                    username={artist.fullName}
                    size={32}
                />

                {artist.verified ? (
                    name()
                ) : (
                    <Flexbox flexDirection="column" alignItems="stretch">
                        {name()}

                        <Text tag="small" color="gray">
                            User not verified.
                        </Text>
                    </Flexbox>
                )}
            </Flexbox>

            <Flexbox gap="xs" alignItems="center">
                <ButtonIcon
                    icon="check"
                    size={24}
                    color="success"
                    onClick={() => handleClick(true)}
                    disabled={
                        !artist.verified ||
                        artist.isApproved === true ||
                        isChangeLoading
                    }
                    label={
                        !artist.verified
                            ? FORM_VALIDATION.USER_NOT_VERIFIED
                            : "Approve"
                    }
                    showLabel
                />

                <ButtonIcon
                    icon="close"
                    size={24}
                    color="danger"
                    onClick={() => handleClick(false)}
                    disabled={
                        !artist.verified ||
                        artist.isApproved === false ||
                        isChangeLoading
                    }
                    label={
                        !artist.verified
                            ? FORM_VALIDATION.USER_NOT_VERIFIED
                            : "Reject"
                    }
                    showLabel
                />
            </Flexbox>
        </StyledArtistLineApprove>
    )
}
