/*=============================================== Wrapper component ===============================================*/

import { StyledWrapper } from "components/layouts/Wrapper/styles"
import type { WrapperProps } from "components/layouts/Wrapper/types"

export function Wrapper({ children }: WrapperProps) {
    return <StyledWrapper>{children}</StyledWrapper>
}
