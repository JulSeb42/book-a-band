/*=============================================== ErrorMessage styles ===============================================*/

import styled from "styled-components"

import { COLORS, RADIUSES, SPACERS } from "components"

export const StyledErrorMessage = styled.p`
    background-color: ${COLORS.DANGER_GHOST};
    border: 1px solid ${COLORS.DANGER};
    padding: ${SPACERS.M};
    border-radius: ${RADIUSES.M};
`
