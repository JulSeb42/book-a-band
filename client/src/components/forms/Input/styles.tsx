/*=============================================== Input styles ===============================================*/

import styled, { css } from "styled-components"

import {
    COLORS,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    FONT_FAMILY,
    FONT_SIZES,
    INPUT_HEIGHT,
    LINE_HEIGHT,
} from "components"
import type { ValidationStatusTypes } from "components/forms/InputComponents/types"

export const InputContent = styled.div`
    width: 100%;
    height: ${INPUT_HEIGHT}px;
    position: relative;
    display: inline-block;
`

const MIN_HEIGHT_TEXTAREA = `calc(${FONT_SIZES.BODY} * ${LINE_HEIGHT} * 3 + (${SPACERS.XS} * 2))`

export const StyledInput = styled.input<{
    $hasIcon?: boolean
    $validation?: ValidationStatusTypes
    $isTextarea?: boolean
}>`
    width: 100%;
    height: ${INPUT_HEIGHT}px;
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.GRAY_ACTIVE};
    border-radius: ${RADIUSES.S};
    padding: 0 ${SPACERS.XS};
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZES.BODY};
    line-height: 100%;
    position: relative;
    z-index: 0;
    transition: ${TRANSITIONS.SHORT};

    &:focus {
        border-color: ${COLORS.PRIMARY};
    }

    &:disabled {
        background-color: ${COLORS.GRAY_GHOST};
        border-color: ${COLORS.GRAY_ACTIVE};
        color: ${COLORS.GRAY};
        cursor: not-allowed;
    }

    ${({ $hasIcon }) =>
        $hasIcon &&
        css`
            padding-left: calc(32px + ${SPACERS.XS});
        `}

    ${({ $validation }) =>
        $validation &&
        $validation === "not-passed" &&
        css`
            background-color: ${COLORS.DANGER_GHOST};

            &:focus {
                border-color: ${COLORS.DANGER};
            }
        `}

        ${({ $isTextarea }) =>
        $isTextarea &&
        css`
            padding: ${SPACERS.XS};
            line-height: ${LINE_HEIGHT};
            min-height: ${MIN_HEIGHT_TEXTAREA};
            resize: vertical;
            height: inherit;
        `}
`
