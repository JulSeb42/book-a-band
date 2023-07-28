/*=============================================== SignupNav ===============================================*/

import { useSearchParams } from "react-router-dom"
import styled from "styled-components"

import {
    BREAKPOINTS,
    COLORS,
    FONT_WEIGHTS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    FONT_SIZES,
} from "components"

import type { UserRoleType } from "types"

export const SignupNav = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const role = (searchParams.get("role") || "user") as UserRoleType

    const roles: UserRoleType[] = ["user", "artist"]

    return (
        <NavContainer>
            {roles.map((r, i) => (
                <Button
                    onClick={() => setSearchParams({ role: r })}
                    $isActive={role === r}
                    key={i}
                >
                    As {r}
                </Button>
            ))}
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    width: 100%;
    ${Mixins.Flexbox({
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: "xs",
    })}
    padding: ${SPACERS.XS};
    background-color: ${COLORS.GRAY_GHOST};
    border-radius: ${RADIUSES.M};
`

const Button = styled.button<{ $isActive: boolean }>`
    width: 100%;
    border-radius: ${RADIUSES.S};
    border: none;
    font-size: ${FONT_SIZES.BODY};
    font-weight: ${FONT_WEIGHTS.BOLD};
    background-color: ${({ $isActive }) =>
        $isActive
            ? Mixins.ColorHoverDefault({ color: "primary" })
            : "transparent"};
    color: ${({ $isActive }) => ($isActive ? COLORS.WHITE : COLORS.BLACK)};
    padding: ${SPACERS.XXS} ${SPACERS.XS};
    transition: ${TRANSITIONS.SHORT};

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            background-color: ${Mixins.ColorHoverHover({ color: "primary" })};
            color: ${COLORS.WHITE};
        }

        &:active {
            background-color: ${Mixins.ColorHoverActive({ color: "primary" })};
        }
    }
`
