/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Mixins, CONTAINERS } from "components"
import type { MainSizesType } from "components/layouts/Main/types"

export const StyledMain = styled.main<{ $size?: MainSizesType }>`
    width: 100%;
    max-width: ${({ $size }) =>
        $size === "form"
            ? CONTAINERS.MAIN_FORM
            : $size === "large"
            ? CONTAINERS.MAIN_LARGE
            : CONTAINERS.MAIN_DEFAULT};
    min-height: 100%;
    position: relative;
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "l",
    })}
`
