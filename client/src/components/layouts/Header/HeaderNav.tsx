/*=============================================== HeaderNav ===============================================*/

import { useContext } from "react"
import { uuid } from "tsx-library-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { PATHS } from "data"

import { Nav, StyledLink } from "components/layouts/Header/styles"
import type { NavLinkType } from "types"

export const HeaderNav = () => {
    const { isLoggedIn, logoutUser } = useContext(
        AuthContext
    ) as AuthContextType

    const baseLinks: NavLinkType[] = [
        {
            text: "All artists",
            to: PATHS.ARTISTS,
        },
    ]

    const anonLinks: NavLinkType[] = [
        {
            text: "Log in",
            to: PATHS.LOGIN,
        },
        {
            text: "Sign up",
            to: PATHS.SIGNUP,
        },
    ]

    const loggedInLinks: NavLinkType[] = [
        {
            text: "My account",
            to: PATHS.MY_ACCOUNT,
        },
        {
            text: "Log out",
            onClick: logoutUser,
        },
    ]

    const navLinksFunc = (links: NavLinkType[]) =>
        links.map(({ text, to, onClick, end }) =>
            to ? (
                <StyledLink to={to} end={end} key={uuid()}>
                    {text}
                </StyledLink>
            ) : (
                // @ts-ignore
                <StyledLink as="button" onClick={onClick} key={uuid()}>
                    {text}
                </StyledLink>
            )
        )

    return (
        <Nav>
            {navLinksFunc(baseLinks)}

            {isLoggedIn ? navLinksFunc(loggedInLinks) : navLinksFunc(anonLinks)}
        </Nav>
    )
}
