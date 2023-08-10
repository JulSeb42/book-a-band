/*=============================================== DashboardNav styles ===============================================*/

import styled from "styled-components"
import { NavLink } from "react-router-dom"

import {
    BREAKPOINTS,
    COLORS,
    CONTAINERS,
    FONT_WEIGHTS,
    Mixins,
    SPACERS,
} from "components"

export const StyledDashboardNav = styled.nav`
    width: ${CONTAINERS.ASIDE};
    padding-top: ${SPACERS.M};
    ${Mixins.Flexbox({
        flexDirection: "column",
        gap: "xxs",
    })}

    @media ${BREAKPOINTS.TABLET} {
        padding-top: 0;
    }
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${Mixins.ColorHoverDefault({ color: "primary" })};
    font-weight: ${FONT_WEIGHTS.BOLD};
    position: relative;

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            color: ${Mixins.ColorHoverHover({ color: "primary" })};
        }

        &:active {
            color: ${Mixins.ColorHoverActive({ color: "primary" })};
        }
    }

    &.active {
        padding-left: ${SPACERS.XS};

        &:before {
            content: "";
            width: 2px;
            background-color: ${COLORS.PRIMARY};
            position: absolute;
            top: 2px;
            bottom: 2px;
            left: 0;
        }
    }
`
