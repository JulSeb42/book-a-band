/*=============================================== Header styles ===============================================*/

import styled from "styled-components"
import { NavLink } from "react-router-dom"
import {
    ThemeLight,
    Mixins,
    Transitions,
    Spacers,
    FontWeights,
} from "tsx-library-julseb"

export const StyledHeader = styled.header`
    background-color: ${ThemeLight.Primary500};
    padding: ${Spacers.S} 5%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "s",
    })}
`

export const SearchForm = styled.form`
    width: 100%;
    max-width: 300px;
`

export const Nav = styled.nav`
    ${Mixins.Flexbox({
        $gap: "m",
    })}
`

export const StyledLink = styled(NavLink)`
    position: relative;
    color: ${ThemeLight.White};
    text-decoration: none;
    font-weight: ${FontWeights.Regular};

    &.active {
        font-weight: ${FontWeights.Black};
    }

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
