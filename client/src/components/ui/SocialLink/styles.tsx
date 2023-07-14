/*=============================================== SocialLink styles ===============================================*/

import styled from "styled-components"
import {
    Radiuses,
    ThemeLight,
    Transitions,
    Mixins,
    Breakpoints,
} from "tsx-library-julseb"

const SIZE = 48

export const StyledSocialLink = styled.a`
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${Radiuses.M};
    color: ${ThemeLight.White};
    transition: ${Transitions.Short};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })}

    @media ${Breakpoints.Hover} {
        &:hover {
            transform: scale(1.02);
        }
    }

    &[data-site="facebook"] {
        background: #3b5998;
    }

    &[data-site="instagram"] {
        background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
        );
    }

    &[data-site="youtube"] {
        background: #c4302b;
    }
`
