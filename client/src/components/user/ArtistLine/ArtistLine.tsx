/*=============================================== ArtistLine component ===============================================*/

import { StyledArtistLine } from "components/user/ArtistLine/styles"
import type { ArtistLineProps } from "components/user/ArtistLine/types"

export const ArtistLine = ({ artist }: ArtistLineProps) => {
    return <StyledArtistLine>{artist.fullName}</StyledArtistLine>
}
