/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Mixins, CONTAINERS, SPACERS } from "components"

export const StyledMain = styled.main`
    width: 100%;
    max-width: var(--main-width, ${CONTAINERS.MAIN.DEFAULT});
    min-height: 100%;
    position: relative;
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "l",
    })}
`
