/*=============================================== Image styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Mixins } from "components"
import type { ObjectFitType, RadiusesType } from "components/types"

const StyledImage = styled.img<{
    $width?: string | number
    $height?: string | number
    $fit?: ObjectFitType
    $borderRadius?: RadiusesType
}>`
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    object-fit: ${({ $fit }) => $fit};
    ${({ $borderRadius }) =>
        Mixins.BorderRadius({ borderRadius: $borderRadius })}
`

export default StyledImage
