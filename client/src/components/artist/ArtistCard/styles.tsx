/*=============================================== ArtistCard styles ===============================================*/

import styled from "styled-components"
import { Mixins } from "tsx-library-julseb"

export const StyledArtistCard = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "flex-start",
        $gap: "s",
    })}
`

export const CardContent = styled.div`
    flex-grow: 1;
    width: 100%;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $justifyContent: "space-between",
        $gap: "xs",
    })}
`

export const TextIconContainer = styled.div`
    height: 36px;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })}
`
