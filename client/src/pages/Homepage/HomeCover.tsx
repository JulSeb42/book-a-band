/*=============================================== HomeCover ===============================================*/

import { ReactNode } from "react"
import styled from "styled-components"
import { Image, Overlays, Mixins, ThemeLight } from "tsx-library-julseb"

import { SITE_DATA } from "data"

export const HomeCover = ({ children }: HomeCoverProps) => {
    return (
        <CoverContainer>
            <StyledCover
                src="/images/cover-home.jpg"
                alt={`Cover ${SITE_DATA.NAME}`}
                width="100%"
                height="100%"
                fit="cover"
            />

            <CoverContent>{children}</CoverContent>
        </CoverContainer>
    )
}

const CoverContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    ${Mixins.Flexbox({
        $justifyContent: "center",
        $alignItems: "center",
    })}

    &:before {
        content: "";
        background: ${Overlays.Gradient.Black};
        width: 100%;
        height: 100%;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
    }
`

const StyledCover = styled(Image)`
    position: absolute !important;
    z-index: 0;
`

const CoverContent = styled.div`
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    max-width: 800px;
    text-align: center;
    color: ${ThemeLight.White};

    ${Mixins.Flexbox({
        $justifyContent: "center",
        $alignItems: "center",
        $gap: "s",
        $flexDirection: "column",
    })}
`

interface HomeCoverProps {
    children?: ReactNode
}
