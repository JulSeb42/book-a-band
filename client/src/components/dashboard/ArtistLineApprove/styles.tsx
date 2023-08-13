/*=============================================== ArtistLineApprove styles ===============================================*/

import styled from "styled-components"

import { Text, Mixins } from "components"

export const StyledArtistLineApprove = styled.div`
    ${Mixins.Flexbox({
        justifyContent: "space-between",
        gap: "xs",
    })}

    & > * {
        height: 32px;
    }
`

export const Name = styled(Text)`
    line-height: 32px;
`
