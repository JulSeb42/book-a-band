/*=============================================== Skeleton styles ===============================================*/

import styled, { css, keyframes } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Flexbox, COLORS, Mixins } from "components"
import type {
    ColorsTypes,
    RadiusesTypes,
    PaddingTypes,
    BorderProps,
} from "components/types"

const ShineLoad = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 106%;
    }
`

const ShineStyles = css`
    position: absolute;
    top: -200px;
    bottom: -200px;
    width: 100px;
    filter: blur(20px);
    transform: skew(-15deg);
    background-color: ${COLORS.WHITE};
    animation: ${ShineLoad} 2000ms infinite;
    opacity: 0.7;
`

export const StyledSkeleton = styled.div<{
    $width: string | number
    $height: string | number
    $maxWidth?: string | number
    $backgroundColor: ColorsTypes
    $borderRadius: RadiusesTypes
    $isShining?: boolean
}>`
    position: relative;
    overflow: hidden;
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};
    background-color: ${({ $backgroundColor }) =>
        Mixins.Color({ color: $backgroundColor })};
    ${({ $borderRadius }) =>
        Mixins.BorderRadius({ borderRadius: $borderRadius })}

    ${({ $isShining }) =>
        $isShining &&
        css`
            &:after {
                content: "";
                ${ShineStyles}
            }
        `}
`

export const StyledSkeletonCard = styled(Flexbox)<{
    $padding: PaddingTypes
    $border?: BorderProps
}>`
    position: relative;
    overflow: hidden;
    ${({ $padding }) => Mixins.Padding({ padding: $padding })}
    ${({ $border }) =>
        Mixins.Border({
            style: $border?.style,
            width: $border?.width,
            color: $border?.color,
        })}
`

export const Shine = styled.span`
    ${ShineStyles}
`
