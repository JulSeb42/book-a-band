/*=============================================== TextIcon styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "components"

export const IconContainer = styled.span<{ $height: number }>`
    ${Mixins.Flexbox({
        alignItems: "center",
        inline: true,
    })}
    height: ${({ $height }) => $height}px;
`
