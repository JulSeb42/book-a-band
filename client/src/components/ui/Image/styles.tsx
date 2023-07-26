/*=============================================== Image styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Mixins } from "components"
import type { ObjectFitTypes, RadiusesTypes } from "components/types"

export const StyledImage = styled.img<{
    $width?: string | number
    $height?: string | number
    $fit?: ObjectFitTypes
    $borderRadius?: RadiusesTypes
}>`
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    object-fit: ${({ $fit }) => $fit};
    ${({ $borderRadius }) =>
        Mixins.BorderRadius({ borderRadius: $borderRadius })}
`
