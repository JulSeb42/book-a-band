/*=============================================== ArtistLine component ===============================================*/

import { useState } from "react"

import { userService } from "api"

import { Avatar, ButtonIcon } from "components"
import { PATHS } from "data"

import { StyledArtistLine, ButtonLink } from "components/user/ArtistLine/styles"
import type { ArtistLineProps } from "components/user/ArtistLine/types"

export const ArtistLine = ({
    artist: getArtist,
    isButtonLoading,
    setIsButtonLoading,
}: ArtistLineProps) => {
    const [artist, setArtist] = useState(getArtist)

    const handleClick = (answer: boolean) => {
        userService
            .approveArtist(artist._id, { isApproved: answer })
            .then(res => {
                setArtist(res.data)
                setIsButtonLoading(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <StyledArtistLine>
            <Avatar src={artist.avatar} size={24} username={artist.fullName} />

            <ButtonLink
                to={PATHS.ARTIST(artist._id)}
                variant="transparent"
                noPadding
            >
                {artist.fullName}
            </ButtonLink>

            <ButtonIcon
                icon="check"
                size={24}
                color="success"
                onClick={() => handleClick(true)}
                disabled={artist.isApproved === true}
                isLoading={isButtonLoading}
            />

            <ButtonIcon
                icon="close"
                size={24}
                color="danger"
                onClick={() => handleClick(false)}
                disabled={artist.isApproved === false}
                isLoading={isButtonLoading}
            />
        </StyledArtistLine>
    )
}
