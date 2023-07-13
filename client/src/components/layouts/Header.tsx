/*=============================================== Header ===============================================*/

import { useContext } from "react"
import type { ElementType } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import {
    Header as Container,
    uuid,
    ThemeLight,
    Transitions,
} from "tsx-library-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { SITE_DATA, PATHS } from "data"

import type { NavLinkType } from "types"

export const Header = () => {
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
        <Container
            logo={{ img: SITE_DATA.LOGO_WHITE, height: 40, to: PATHS.ROOT }}
            navMobileVariant="drawer"
            search={{
                pathname: PATHS.ARTISTS,
                icon: "search",
                iconSize: 20,
                placeholder: "Search by city or genre...",
                keyboardShortcut: ["Command", "KeyK"],
                showKeys: true,
                maxWidth: 300,
            }}
        >
            {navLinksFunc(baseLinks)}

            {isLoggedIn ? navLinksFunc(loggedInLinks) : navLinksFunc(anonLinks)}
        </Container>
    )
}

const StyledLink = styled(NavLink)<{ as?: ElementType }>`
    position: relative;

    &:after {
        content: "";
        width: 0;
        height: 1px;
        position: absolute;
        left: 50%;
        right: 50%;
        bottom: -1px;
        background-color: ${ThemeLight.White};
        transition: ${Transitions.Bezier};
    }

    &:hover:after {
        width: 100%;
        left: 0;
        right: 0;
    }
`
