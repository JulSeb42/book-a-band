/*=============================================== Footer styles ===============================================*/

import styled from "styled-components"
import { ThemeLight, Spacers, Mixins } from "tsx-library-julseb"

export const StyledFooter = styled.footer`
    background-color: ${ThemeLight.Gray300};
    ${Mixins.Grid({
        $col: 3,
        $gap: "l",
    })};
    padding: ${Spacers.M} 5%;
`
