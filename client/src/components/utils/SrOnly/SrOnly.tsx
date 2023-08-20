/*=============================================== SrOnly component ===============================================*/

import { StyledSrOnly } from "components/utils/SrOnly/styles"
import type { SrOnlyProps } from "components/utils/SrOnly/types"

export function SrOnly({ as, children }: SrOnlyProps) {
    return <StyledSrOnly as={as}>{children}</StyledSrOnly>
}
