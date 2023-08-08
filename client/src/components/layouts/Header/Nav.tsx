/*=============================================== Nav ===============================================*/

import { useContext, useState, useRef } from "react"
import { NavLink } from "react-router-dom"

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
            id: 0,
            text: "All artists",
            to: PATHS.ARTISTS,
        },
    ]

    const anonLinks: NavLinkType[] = [
        {
            id: 1,
            text: "Login",
            to: PATHS.LOGIN,
        },
        {
            id: 2,
            text: "Sign up",
            to: PATHS.SIGNUP,
            end: true,
        },
    ]

    const protectedLinks: NavLinkType[] = [
        {
            id: 3,
            text: "My account",
            to: PATHS.MY_ACCOUNT,
        },
        {
            id: 4,
            text: "Log out",
            onClick: logoutUser,
        },
    ]

    const linksFn = (links: NavLinkType[]) =>
        links.map(({ text, end, to, onClick, id }) => (
            <LinkNav
                as={onClick ? "button" : NavLink}
                // @ts-expect-error: fixed by `as` prop
                to={to}
                onClick={onClick}
                end={end}
                key={id}
            >
                {text}
            </LinkNav>
        ))

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
