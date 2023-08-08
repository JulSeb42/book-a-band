/*=============================================== Nav ===============================================*/

import { useContext, useState, useRef } from "react"
import { uuid } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Burger } from "components/layouts/Burger"
import { useClickOutside } from "hooks"
import { PATHS } from "data"

import { StyledNav, LinkNav } from "components/layouts/Header/styles"
import type { NavLinkType } from "types"

export const Nav = () => {
    const { isLoggedIn, logoutUser } = useContext(
        AuthContext
    ) as AuthContextType

    const [isNavOpen, setIsNavOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    useClickOutside(navRef, () => {
        if (isNavOpen) setIsNavOpen(false)
    })

    const baseLinks: NavLinkType[] = [
        {
            text: "All artists",
            to: PATHS.ARTISTS,
        },
    ]

    const anonLinks: NavLinkType[] = [
        {
            text: "Login",
            to: PATHS.LOGIN,
        },
        {
            text: "Sign up",
            to: PATHS.SIGNUP,
            end: true,
        },
    ]

    const protectedLinks: NavLinkType[] = [
        {
            text: "My account",
            to: PATHS.MY_ACCOUNT,
        },
        {
            text: "Log out",
            onClick: logoutUser,
        },
    ]

    const linksFn = (links: NavLinkType[]) =>
        links.map(({ text, end, to, onClick }) =>
            to ? (
                <LinkNav to={to} end={end} key={uuid()}>
                    {text}
                </LinkNav>
            ) : (
                // @ts-expect-error
                <LinkNav as="button" onClick={onClick} key={uuid()}>
                    {text}
                </LinkNav>
            )
        )

    return (
        <>
            <Burger
                isOpen={isNavOpen}
                onClick={() => setIsNavOpen(!isNavOpen)}
            />

            <StyledNav $isOpen={isNavOpen} ref={navRef}>
                {linksFn(baseLinks)}

                {linksFn(isLoggedIn ? protectedLinks : anonLinks)}
            </StyledNav>
        </>
    )
}
