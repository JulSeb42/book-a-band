/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"
import { FONT_FAMILY, LINE_HEIGHT, FONT_SIZES, FONT_WEIGHTS } from "components"

const baseTextStyles = css`
    font-family: ${FONT_FAMILY};
    line-height: ${LINE_HEIGHT};

    a,
    button {
        text-decoration: none;
        border: none;
        padding: 0;
    }
`

export const StyledH1 = styled.h1`
    font-size: ${FONT_SIZES.H1};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledH2 = styled.h2`
    font-size: ${FONT_SIZES.H2};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledH3 = styled.h3`
    font-size: ${FONT_SIZES.H3};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledH4 = styled.h4`
    font-size: ${FONT_SIZES.H4};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledH5 = styled.h5`
    font-size: ${FONT_SIZES.H5};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledH6 = styled.h6`
    font-size: ${FONT_SIZES.H6};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledP = styled.p`
    font-size: ${FONT_SIZES.BODY};
    ${baseTextStyles}
`

export const StyledStrong = styled.strong`
    font-size: ${FONT_SIZES.BODY};
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles}
`

export const StyledEm = styled.em`
    font-size: ${FONT_SIZES.BODY};
    font-style: italic;
    ${baseTextStyles}
`

export const StyledSmall = styled.small`
    font-size: ${FONT_SIZES.SMALL};
    ${baseTextStyles}
`

export const StyledUl = styled.ul`
    font-size: ${FONT_SIZES.BODY};
    ${baseTextStyles}
`
