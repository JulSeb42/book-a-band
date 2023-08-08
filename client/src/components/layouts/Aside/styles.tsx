/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"
import { CONTAINERS, Mixins } from "components"

import type { SpacersType } from "components/types"

export const StyledAside = styled.aside<{
    $center?: boolean
    $gap?: SpacersType
}>`
    width: 100%;
    max-width: ${CONTAINERS.ASIDE};
    min-height: 100%;
    position: relative;
    ${({ $center, $gap }) =>
        Mixins.Flexbox({
            flexDirection: "column",
            alignItems: $center ? "center" : "stretch",
            gap: $gap,
        })}
`
