/*=============================================== Icon styles ===============================================*/

import styled from "styled-components"
import SVG from "react-inlinesvg"

import { Mixins } from "components"
import type { ColorsType } from "components/types"

export const StyledIcon = styled(SVG)<{ $size?: number; $color?: ColorsType }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${({ $color }) => Mixins.Color({ color: $color || "currentColor" })};

    path {
        fill: ${({ $color }) =>
            Mixins.Color({ color: $color || "currentColor" })};
    }
`
