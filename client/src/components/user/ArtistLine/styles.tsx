/*=============================================== ArtistLine styles ===============================================*/

import styled from "styled-components"

import { Button, Mixins } from "components"

export const StyledArtistLine = styled.div`
    ${Mixins.Flexbox({
        alignItems: "center",
        gap: "xs",
    })}
`

export const ButtonLink = styled(Button)`
    flex-grow: 1;
    text-align: left;
    justify-content: flex-start;
`
