/*=============================================== ArtistLineApprove styles ===============================================*/

import styled from "styled-components"

import { Text, Mixins } from "components"

export const StyledArtistLineApprove = styled.div`
    ${Mixins.Flexbox({
        justifyContent: "space-between",
        gap: "xs",
    })}

    & > div:last-child {
        width: 30%;
    }
`

export const Name = styled(Text)`
    line-height: 32px;
`
