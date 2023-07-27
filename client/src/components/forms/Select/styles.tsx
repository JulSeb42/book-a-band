/*=============================================== Select styles ===============================================*/

import styled from "styled-components"

import {
    Mixins,
    COLORS,
    TRANSITIONS,
    SPACERS,
    RADIUSES,
    BREAKPOINTS,
} from "components"
import { BaseInputStyles } from "components/forms/InputComponents/styles"

export const StyledSelect = styled.div<{ $isOpen: boolean }>`
    width: 100%;
    position: relative;
    z-index: ${({ $isOpen }) => $isOpen && 20};
`

export const SelectButton = styled.button`
    ${BaseInputStyles({})}
    width: 100%;
    z-index: 1;
`

export const List = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 16px;
    z-index: 0;
    background-color: ${COLORS.WHITE};
    width: 100%;
    max-height: ${({ $isOpen }) =>
        $isOpen ? `calc(${40 * 3}px + ${SPACERS.M})` : 0};
    overflow: hidden;
    overflow-y: ${({ $isOpen }) => $isOpen && "scroll"};
    transition: ${TRANSITIONS.SHORT};
    border-radius: 0 0 ${RADIUSES.S} ${RADIUSES.S};
    border: 1px solid;
    border-color: ${({ $isOpen }) =>
        $isOpen ? COLORS.PRIMARY : "transparent"};
    padding-top: ${({ $isOpen }) => ($isOpen ? "14px" : 0)};
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
    })}
    ${Mixins.HideScrollbar}
`

export const Option = styled.span<{ $isActive: boolean }>`
    cursor: pointer;
    padding: ${SPACERS.XS};
    transition: ${TRANSITIONS.SHORT};
    background-color: ${({ $isActive }) =>
        $isActive ? COLORS.PRIMARY : COLORS.WHITE};
    color: ${({ $isActive }) => ($isActive ? COLORS.WHITE : COLORS.BLACK)};

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            background-color: ${COLORS.PRIMARY_HOVER};
            color: ${COLORS.WHITE};
        }

        &:active {
            background-color: ${COLORS.PRIMARY_ACTIVE};
        }
    }
`
