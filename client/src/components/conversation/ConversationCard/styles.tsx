/*=============================================== ConversationCard styles ===============================================*/

import styled from "styled-components"
import { Link } from "react-router-dom"

import {
    BREAKPOINTS,
    COLORS,
    FONT_SIZES,
    LINE_HEIGHT,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
} from "components"

export const StyledConversationCard = styled(Link)`
    text-decoration: none;
    color: ${COLORS.BLACK};
    padding: ${SPACERS.XS};
    background-color: transparent;
    border-radius: ${RADIUSES.M};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        gap: "xs",
    })}

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            background-color: ${COLORS.GRAY_GHOST};
        }
    }
`

export const CardContent = styled.div`
    width: 100%;
    max-width: calc(100% - 8px - 48px - ${SPACERS.XS} * 2);
    display: block;
`

export const BadgeContainer = styled.span`
    height: calc(${FONT_SIZES.H6} * ${LINE_HEIGHT});
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
    })}
`
