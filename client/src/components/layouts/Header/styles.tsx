/*=============================================== Header styles ===============================================*/

import styled from "styled-components"
import { NavLink } from "react-router-dom"

import {
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

export const StyledNav = styled.nav`
    ${Mixins.Flexbox({
        alignItems: "center",
        gap: "s",
    })}
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

    &:hover:before {
        width: 100%;
        left: 0;
    }

    &.active {
        font-weight: ${FONT_WEIGHTS.BLACK};
    }
`

export const SearchForm = styled.form`
    width: 100%;
    max-width: 300px;
`
