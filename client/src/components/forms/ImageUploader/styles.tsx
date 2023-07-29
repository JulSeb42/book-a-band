/*=============================================== ImageUploader styles ===============================================*/

import styled from "styled-components"

import {
    Avatar,
    BREAKPOINTS,
    COLORS,
    Mixins,
    OVERLAYS,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
} from "components"

const SIZE = 150

const StyledAvatar = styled(Avatar).attrs({ size: SIZE })`
    position: relative;
    z-index: 0;
`

const IconContainer = styled.span`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: ${SPACERS.S};
    background: ${OVERLAYS.WHITE_DEFAULT};
    color: ${COLORS.PRIMARY};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })}
`

const StyledImageUploader = styled.label`
    position: relative;
    border-radius: ${RADIUSES.CIRCLE};
    overflow: hidden;
    width: ${SIZE}px;
    height: ${SIZE}px;
    cursor: pointer;

    @media ${BREAKPOINTS.HOVER} {
        &:hover ${IconContainer} {
            background: ${OVERLAYS.WHITE_HOVER};
        }
    }
`

const Input = styled.input`
    display: none;
`

export { StyledAvatar, IconContainer, StyledImageUploader, Input }
