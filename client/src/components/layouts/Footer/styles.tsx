/*=============================================== Footer styles ===============================================*/

import styled from "styled-components"

import { COLORS, Mixins, SPACERS, BREAKPOINTS } from "components"

export const StyledFooter = styled.footer`
    background-color: ${COLORS.GRAY_GHOST};
    padding: ${SPACERS.L} 5%;
    ${Mixins.Grid({
        col: 3,
        gap: "s",
    })}

    @media ${BREAKPOINTS.TABLET} {
        grid-template-columns: repeat(1, 1fr);
        gap: ${SPACERS.M};
    }
`
