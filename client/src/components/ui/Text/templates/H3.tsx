/*=============================================== H3 ===============================================*/

import { StyledH3 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H3 = ({ children }: TextProps) => {
    return <StyledH3>{children}</StyledH3>
}
