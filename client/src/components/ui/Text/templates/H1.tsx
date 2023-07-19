/*=============================================== H1 ===============================================*/

import { StyledH1 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H1 = ({ children }: TextProps) => {
    return <StyledH1>{children}</StyledH1>
}
