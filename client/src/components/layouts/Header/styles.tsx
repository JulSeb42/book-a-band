/*=============================================== Header styles ===============================================*/

import styled from "styled-components"
import { NavLink } from "react-router-dom"

import {
    BREAKPOINTS,
    COLORS,
    FONT_FAMILY,
    FONT_SIZES,
    FONT_WEIGHTS,
    Mixins,
    SPACERS,
    TRANSITIONS,
} from "components"

export const StyledHeader = styled.header`
    background-color: ${COLORS.PRIMARY};
    padding: ${SPACERS.S} 5%;
    width: 100%;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "space-between",
        gap: "m",
    })}
`

export const StyledNav = styled.nav<{ $isOpen: boolean }>`
    ${Mixins.Flexbox({
        alignItems: "center",
        gap: "s",
    })}

    @media ${BREAKPOINTS.MOBILE} {
        position: absolute;
        top: ${({ $isOpen }) => ($isOpen ? 70 : -200)}px;
        transition: ${TRANSITIONS.SHORT};
        background-color: ${COLORS.PRIMARY};
        left: 0;
        flex-direction: column;
        z-index: 998;
        width: 100%;
        padding: ${({ $isOpen }) => ($isOpen ? `${SPACERS.S} 5%` : 0)};
        align-items: flex-start;
    }
`

export const LinkNav = styled(NavLink)`
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: ${FONT_SIZES.BODY};
    font-family: ${FONT_FAMILY};
    text-decoration: none;
    color: ${COLORS.WHITE};
    position: relative;

    &:before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 50%;
        right: 50%;
        width: 0;
        height: 1px;
        background-color: ${COLORS.WHITE};
        transition: ${TRANSITIONS.BEZIER};
    }

    @media ${BREAKPOINTS.HOVER} {
        &:hover:before {
            width: 100%;
            left: 0;
        }
    }

    &.active {
        font-weight: ${FONT_WEIGHTS.BLACK};
    }
`

export const SearchForm = styled.form`
    width: 100%;
    max-width: 300px;

    @media ${BREAKPOINTS.MOBILE} {
        max-width: 150px;
    }
`
