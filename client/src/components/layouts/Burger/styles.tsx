/*=============================================== Burger styles ===============================================*/

import styled from "styled-components"

import { BREAKPOINTS, COLORS, TRANSITIONS } from "components"

const SPAN_HEIGHT = 2

export const StyledBurger = styled.button<{ $isOpen: boolean }>`
    display: none;
    width: 32px;
    height: 24px;
    background-color: transparent;
    border: none;
    padding: 0;
    position: relative;

    @media ${BREAKPOINTS.MOBILE} {
        display: block;
    }

    span {
        height: ${SPAN_HEIGHT}px;
        width: 100%;
        display: block;
        background-color: ${COLORS.WHITE};
        transition: ${TRANSITIONS.SHORT};
        position: absolute;

        &:first-child {
            top: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            left: 0;
            transform: ${({ $isOpen }) => $isOpen && "rotate(45deg)"};
        }

        &:nth-child(2) {
            top: calc(50% - ${SPAN_HEIGHT}px / 2);
            width: ${({ $isOpen }) => $isOpen && 0};
        }

        &:last-child {
            bottom: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            left: 0;
            transform: ${({ $isOpen }) => $isOpen && "rotate(-45deg)"};
        }
    }
`
