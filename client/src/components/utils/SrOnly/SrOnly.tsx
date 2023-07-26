/*=============================================== SrOnly component ===============================================*/

import { StyledSrOnly } from "components/utils/SrOnly/styles"
import type { SrOnlyProps } from "components/utils/SrOnly/types"

export const SrOnly = ({ as, children }: SrOnlyProps) => {
    return <StyledSrOnly as={as}>{children}</StyledSrOnly>
}
