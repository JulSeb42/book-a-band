/*=============================================== HomeCover ===============================================*/

import type { ReactNode } from "react"
import styled from "styled-components"

import { OVERLAYS, Mixins } from "components"

interface HomeCoverProps {
    children?: ReactNode
}

export const HomeCover = ({ children }: HomeCoverProps) => {
    return <Cover>{children}</Cover>
}

const Cover = styled.div`
    background-image: url("/images/cover-home.jpg");
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    position: relative;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "s",
    })}

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${OVERLAYS.GRADIENT};
        z-index: 0;
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`
