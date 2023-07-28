/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { Mixins, BREAKPOINTS, SPACERS } from "components"

export const StyledWrapper = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "l",
    })}
    min-height: calc(100vh - 70px - ${SPACERS.L} - ${SPACERS.M});

    @media ${BREAKPOINTS.TABLET} {
        flex-direction: column;
        align-items: center;
        min-height: inherit;
    }
`
