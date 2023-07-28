/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Mixins, CONTAINERS, SPACERS } from "components"
import type { MainSizesType } from "components/layouts/Main/types"

export const StyledMain = styled.main<{ $size?: MainSizesType }>`
    width: 100%;
    max-width: ${({ $size }) =>
        $size === "form"
            ? CONTAINERS.MAIN.FORM
            : $size === "large"
            ? CONTAINERS.MAIN.LARGE
            : CONTAINERS.MAIN.DEFAULT};
    min-height: 100%;
    position: relative;
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "l",
    })}
`
