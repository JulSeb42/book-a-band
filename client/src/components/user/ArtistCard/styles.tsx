/*=============================================== ArtistCard styles ===============================================*/

import styled from "styled-components"

import { BREAKPOINTS, Mixins, SPACERS } from "components"

export const StyledArtistCard = styled.div`
    ${Mixins.Flexbox({
        alignItems: "flex-start",
        gap: "s",
    })}

    @media ${BREAKPOINTS.MOBILE} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const CardContent = styled.div`
    flex-grow: 1;
    max-width: calc(100% - 120px - ${SPACERS.S});
    ${Mixins.Flexbox({
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "xs",
    })}

    @media ${BREAKPOINTS.MOBILE} {
        max-width: inherit;
        width: 100%;
    }
`

export const TextIconContainer = styled.div`
    height: 36px;
    ${Mixins.Flexbox({
        alignItems: "center",
        inline: true,
    })}
`
