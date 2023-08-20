/*=============================================== ConversationCard styles ===============================================*/

import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import {
    BREAKPOINTS,
    COLORS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
} from "components"

export const CardContainer = styled.div`
    position: relative;
`

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

export const CardContent = styled.div<{ $isSkeleton?: boolean }>`
    width: 100%;
    max-width: calc(100% - 8px - 48px - ${SPACERS.XS} * 2);
    display: block;

    ${({ $isSkeleton }) =>
        $isSkeleton &&
        css`
            ${Mixins.Flexbox({
                flexDirection: "column",
                gap: "xxs",
            })}
        `}
`

export const BadgeContainer = styled.span`
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        gap: "xs",
    })}
`

export const DeleteContainer = styled.span`
    position: absolute;
    top: ${SPACERS.XS};
    right: ${SPACERS.XS};
`
