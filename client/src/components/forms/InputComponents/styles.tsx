/*=============================================== InputComponents styles ===============================================*/

import styled from "styled-components"

import {
    Mixins,
    INPUT_HEIGHT,
    COLORS,
    SPACERS,
    FONT_WEIGHTS,
    Text,
} from "components"

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
    z-index: 1;
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
