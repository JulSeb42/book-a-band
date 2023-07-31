/*=============================================== Badge styles ===============================================*/

import styled from "styled-components"

import { Mixins, RADIUSES } from "components"
import type { ColorsType } from "components/types"

export const StyledBadge = styled.span<{
    $color?: ColorsType
    $size?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    display: inline-block;
    border-radius: ${RADIUSES.CIRCLE};
    background-color: ${({ $color }) =>
        Mixins.Color({
            color: $color || "danger",
        })};
`
