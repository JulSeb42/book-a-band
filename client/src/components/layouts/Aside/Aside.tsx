/*=============================================== Aside component ===============================================*/

import { StyledAside } from "components/layouts/Aside/styles"
import type { AsideProps } from "components/layouts/Aside/types"

export function Aside({ as, children, center, gap = "l" }: AsideProps) {
    return (
        <StyledAside as={as} $center={center} $gap={gap}>
            {children}
        </StyledAside>
    )
}
