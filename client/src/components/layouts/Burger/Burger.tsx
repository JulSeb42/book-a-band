/*=============================================== Burger component ===============================================*/

import { StyledBurger } from "components/layouts/Burger/styles"
import type { BurgerProps } from "components/layouts/Burger/types"

export function Burger({ isOpen, onClick }: BurgerProps) {
    return (
        <StyledBurger onClick={onClick} $isOpen={isOpen}>
            <span />
            <span />
            <span />
        </StyledBurger>
    )
}
