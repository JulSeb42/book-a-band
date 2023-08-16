/*=============================================== Header component ===============================================*/

import { Link } from "react-router-dom"

import { Logo } from "components"
import { Nav } from "components/layouts/Header/Nav"
import { Search } from "components/layouts/Header/Search"

import { StyledHeader } from "components/layouts/Header/styles"

export function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                <Logo height={40} isWhite />
            </Link>

            <Search />

            <Nav />
        </StyledHeader>
    )
}
