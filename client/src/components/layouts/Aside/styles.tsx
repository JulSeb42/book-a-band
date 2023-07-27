/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"
import { CONTAINERS, Mixins, SPACERS } from "components"

export const StyledAside = styled.aside<{ $center?: boolean }>`
    width: 100%;
    max-width: ${CONTAINERS.ASIDE};
    min-height: 100%;
    position: relative;
    padding: ${SPACERS.XXL} 0;
    ${({ $center }) =>
        Mixins.Flexbox({
            flexDirection: "column",
            alignItems: $center ? "center" : "stretch",
            gap: "l",
        })}
`
