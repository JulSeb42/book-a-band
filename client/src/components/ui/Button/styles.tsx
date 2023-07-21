/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import {
    Mixins,
    FONT_SIZES,
    FONT_WEIGHTS,
    FONT_FAMILY,
    COLORS,
    SPACERS,
    RADIUSES,
} from "components"

import type { ColorsHoverTypes } from "components/types"
import type {
    ButtonSizesTypes,
    ButtonVariantsTypes,
} from "components/ui/Button/types"

export const StyledButton = styled.button<{
    $variant?: ButtonVariantsTypes
    $size?: ButtonSizesTypes
    $color?: ColorsHoverTypes
}>`
    border: none;
    background-color: transparent;
`
