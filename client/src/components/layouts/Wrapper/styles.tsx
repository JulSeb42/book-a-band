/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { Mixins, BREAKPOINTS, SPACERS } from "components"

export const StyledWrapper = styled.div`
    position: relative;
    min-height: calc(100vh - 70px - ${SPACERS.L} - ${SPACERS.M});
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "l",
    })}

    @media ${BREAKPOINTS.TABLET} {
        flex-direction: column;
        align-items: center;
        min-height: inherit;
    }
`
