/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Mixins, CONTAINERS, SPACERS } from "components"
import type { MainSizesTypes } from "components/layouts/Main/types"

export const StyledMain = styled.main<{ $size?: MainSizesTypes }>`
    width: 100%;
    max-width: ${({ $size }) =>
        $size === "form" ? CONTAINERS.MAIN.FORM : CONTAINERS.MAIN.DEFAULT};
    min-height: 100%;
    position: relative;
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "l",
    })}
`
