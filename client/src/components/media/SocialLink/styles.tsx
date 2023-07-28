/*=============================================== SocialLink styles ===============================================*/

import styled from "styled-components"

import { BREAKPOINTS, COLORS, Mixins, RADIUSES, TRANSITIONS } from "components"
import type { SocialSitesType } from "types"

const SIZE = 48

export const StyledSocialLink = styled.a<{ $site: SocialSitesType }>`
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${RADIUSES.M};
    color: ${COLORS.WHITE};
    transition: ${TRANSITIONS.SHORT};
    background: ${({ $site }) =>
        $site === "facebook"
            ? "#3b5998"
            : $site === "instagram"
            ? "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
            : $site === "youtube" && "#c4302b"};
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
        inline: true,
    })}

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            transform: scale(1.02);
        }
    }
`
