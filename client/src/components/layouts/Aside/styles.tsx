/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"
import { CONTAINERS, Mixins, SPACERS } from "components"

export const StyledAside = styled.aside`
    width: 100%;
    max-width: ${CONTAINERS.ASIDE};
    min-height: 100%;
    position: relative;
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "l",
    })}
`
