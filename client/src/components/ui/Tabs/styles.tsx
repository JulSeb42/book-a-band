/*=============================================== Tabs styles ===============================================*/

import { COLORS, FONT_FAMILY, FONT_SIZES, Mixins, SPACERS } from "components"
import styled from "styled-components"

export const StyledTabs = styled.div`
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
        gap: "l",
    })}
`

export const StyledTabsButtonsContainer = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        gap: "m",
    })}

    &:before {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        z-index: 0;
        left: 0;
        bottom: -2px;
        background-color: ${COLORS.GRAY_ACTIVE};
    }
`

export const StyledTabButton = styled.button<{ $isActive: boolean }>`
    min-width: 80px;
    text-align: left;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    z-index: 1;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZES.BODY};

    &:before {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: ${({ $isActive }) =>
            $isActive ? COLORS.PRIMARY : "transparent"};
    }
`

export const StyledTab = styled.div<{ $isActive: boolean }>`
    display: ${({ $isActive }) => ($isActive ? "flex" : "none")};
    flex-direction: column;
    gap: ${SPACERS.S};
`
