/*=============================================== InputComponents styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Mixins,
    INPUT_HEIGHT,
    COLORS,
    SPACERS,
    FONT_WEIGHTS,
    Text,
    RADIUSES,
    FONT_FAMILY,
    FONT_SIZES,
    TRANSITIONS,
} from "components"
import type { ValidationStatusType } from "types"

export const BaseInputStyles = ({
    $hasIcon,
    $validation,
}: {
    $hasIcon?: boolean
    $validation?: ValidationStatusType
}) => css`
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
    text-align: left;
    outline: none;

    &:focus {
        border-color: ${COLORS.PRIMARY};
    }

    &:disabled {
        background-color: ${COLORS.GRAY_GHOST};
        border-color: ${COLORS.GRAY_ACTIVE};
        color: ${COLORS.GRAY};
        cursor: not-allowed;
    }

    ${$hasIcon &&
    css`
        padding-left: calc(32px + ${SPACERS.XS});
    `}

    ${$validation &&
    $validation === "not-passed" &&
    css`
        background-color: ${COLORS.DANGER_GHOST};

        &:focus {
            border-color: ${COLORS.DANGER};
        }
    `}
`

export const StyledRightContainer = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    padding-right: ${SPACERS.XS};
    height: ${INPUT_HEIGHT}px;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "xs",
    })}
`

export const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })}
    width: ${INPUT_HEIGHT}px;
    height: ${INPUT_HEIGHT}px;

    &:after {
        content: "";
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(${INPUT_HEIGHT}px - 2px);
        width: 1px;
        background-color: ${COLORS.GRAY_ACTIVE};
    }
`

export const StyledInputContainer = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignContent: "stretch",
        gap: "xxs",
    })}
`

export const Label = styled.label`
    font-weight: ${FONT_WEIGHTS.BLACK};
    color: ${COLORS.PRIMARY};
`

export const HelperContainer = styled.div`
    ${Mixins.Flexbox({
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "xxs",
    })}
`

export const HelperIconContainer = styled.span`
    height: 21px;
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
    })}
`

export const Helper = styled(Text).attrs({ tag: "small" })`
    flex-grow: 1;
`
