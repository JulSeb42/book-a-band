/*=============================================== Header component ===============================================*/

import { Link } from "react-router-dom"
import { Image } from "tsx-library-julseb"

import { HeaderNav } from "components/layouts/Header/HeaderNav"
import { Search } from "components/layouts/Header/Search"

import { SITE_DATA } from "data"

import { StyledHeader } from "components/layouts/Header/styles"

export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <Image
                    height={40}
                    src={SITE_DATA.LOGO_WHITE}
                    alt={`Logo ${SITE_DATA.NAME}`}
                />
            </Link>

            <Search />

            <HeaderNav />
        </StyledHeader>
    )
}
