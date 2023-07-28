/*=============================================== Loader styles ===============================================*/

import styled, { keyframes } from "styled-components"

import { Mixins, RADIUSES } from "components"

import type { ColorsType } from "components/types"

const Flash = keyframes`
    0% {
        opacity: 1;
    }

    50%, 100% {
        opacity: 0.5;
    }
`

const DURATION_LOADER_FOUR = 1000

export const StyledLoader = styled.span<{
    $size?: number
    $color: ColorsType
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
        gap: "xxs",
    })}
    position: relative;

    span {
        aspect-ratio: 1;
        flex-grow: 1;
        display: inline-block;
        border-radius: ${RADIUSES.CIRCLE};
        background-color: ${({ $color }) => Mixins.Color({ color: $color })};

        &:first-child {
            animation: ${Flash} ${DURATION_LOADER_FOUR}ms infinite alternate;
            animation-delay: 0ms;
        }

        &:nth-child(2) {
            animation: ${Flash} ${DURATION_LOADER_FOUR}ms infinite linear
                alternate;
            animation-delay: 250ms;
        }

        &:last-child {
            animation: ${Flash} ${DURATION_LOADER_FOUR}ms infinite alternate;
            animation-delay: 500ms;
        }
    }
`
