/*=============================================== Input styles ===============================================*/

import styled, { css } from "styled-components"

import { SPACERS, FONT_SIZES, INPUT_HEIGHT, LINE_HEIGHT } from "components"
import { BaseInputStyles } from "components/forms/InputComponents/styles"
import type { ValidationStatusType } from "types"

export const InputContent = styled.div`
    width: 100%;
    height: ${INPUT_HEIGHT}px;
    position: relative;
    display: inline-block;
`

const MIN_HEIGHT_TEXTAREA = `calc(${FONT_SIZES.BODY} * ${LINE_HEIGHT} * 3 + (${SPACERS.XS} * 2))`

export const StyledInput = styled.input<{
    $hasIcon?: boolean
    $validation?: ValidationStatusType
    $isTextarea?: boolean
}>`
    ${({ $validation, $hasIcon }) =>
        BaseInputStyles({
            $hasIcon,
            $validation,
        })}

    &[type="date"] {
        cursor: pointer;

        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator {
            cursor: pointer;
        }
    }

    &[type="search"] {
        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            appearance: none;
        }
    }

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
