/*=============================================== P ===============================================*/

import { StyledP } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const P = ({ children }: TextProps) => {
    return <StyledP>{children}</StyledP>
}
