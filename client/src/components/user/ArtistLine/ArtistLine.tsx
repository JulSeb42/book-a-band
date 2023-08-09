/*=============================================== ArtistLine component ===============================================*/

import { Link } from "react-router-dom"

import { PATHS } from "data"

import { StyledArtistLine } from "components/user/ArtistLine/styles"
import type { ArtistLineProps } from "components/user/ArtistLine/types"

export const ArtistLine = ({ artist }: ArtistLineProps) => {
    return (
        <StyledArtistLine>
            <Link to={PATHS.ARTIST(artist._id)}>{artist.fullName}</Link>
        </StyledArtistLine>
    )
}
