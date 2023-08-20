/*=============================================== Main component ===============================================*/

import { StyledMain } from "components/layouts/Main/styles"
import type { MainProps } from "components/layouts/Main/types"

export function Main({ as, children, size }: MainProps) {
    return (
        <StyledMain as={as} $size={size}>
            {children}
        </StyledMain>
    )
}
