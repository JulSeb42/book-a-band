/*=============================================== Form styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "components"

export const StyledForm = styled.form`
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "xs",
    })}
`
