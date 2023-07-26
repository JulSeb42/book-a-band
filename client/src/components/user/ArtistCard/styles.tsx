/*=============================================== ArtistCard styles ===============================================*/

import styled from "styled-components"

import { Mixins, SPACERS } from "components"

export const CardContent = styled.div`
    flex-grow: 1;
    max-width: calc(100% - 120px - ${SPACERS.S});
    ${Mixins.Flexbox({
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "xs",
    })}
`

export const TextIconContainer = styled.div`
    height: 36px;
    ${Mixins.Flexbox({
        alignItems: "center",
        inline: true,
    })}
`
