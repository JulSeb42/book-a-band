/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"

import { COLORS, Mixins, RADIUSES, SPACERS, CONTAINERS } from "components"

export const StyledAlert = styled.div`
    background-color: ${COLORS.DANGER_GHOST};
    border: 1px solid ${COLORS.DANGER};
    padding: ${SPACERS.M};
    border-radius: ${RADIUSES.M};
    max-width: ${CONTAINERS.MAIN_DEFAULT};
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "s",
    })}
`
