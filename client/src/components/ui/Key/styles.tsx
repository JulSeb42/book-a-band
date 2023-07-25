/*=============================================== Key styles ===============================================*/

import styled from "styled-components"

import { SPACERS, RADIUSES, FONT_SIZES, COLORS } from "components"

export const StyledKey = styled.span`
    border: 1px solid;
    border-bottom-width: 2px;
    width: fit-content;
    justify-self: start;
    padding: 0 ${SPACERS.XXS};
    font-size: ${FONT_SIZES.SMALL};
    border-radius: ${RADIUSES.XS};
    border-color: ${COLORS.PRIMARY};
    background-color: ${COLORS.PRIMARY_GHOST};
`
