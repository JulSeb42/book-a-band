/*=============================================== Modal styles ===============================================*/

import styled from "styled-components"

import { OVERLAYS } from "components"

export const StyledModal = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${OVERLAYS.BLACK};
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`
