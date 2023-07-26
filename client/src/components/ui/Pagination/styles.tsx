/*=============================================== Pagination styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Mixins,
    BREAKPOINTS,
    SPACERS,
    RADIUSES,
    COLORS,
    FONT_WEIGHTS,
    TRANSITIONS,
} from "components"

export const StyledPagination = styled.div`
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
        gap: "xs",
    })}

    @media ${BREAKPOINTS.MOBILE} {
        gap: ${SPACERS.XXS};
    }
`

const BUTTON_SIZE = 32

export const StyledPaginationButton = styled.button<{
    $isMore?: boolean
    $isActive?: boolean
}>`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    border-radius: ${RADIUSES.CIRCLE};
    border: none;
    font-weight: ${FONT_WEIGHTS.BOLD};
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })}

    ${({ $isMore, $isActive }) =>
        $isMore
            ? css`
                  cursor: default;
              `
            : css`
                  background-color: ${$isActive
                      ? Mixins.ColorHoverDefault({ color: "primary" })
                      : "transparent"};
                  color: ${$isActive ? COLORS.WHITE : COLORS.PRIMARY};
                  transition: ${TRANSITIONS.SHORT};

                  &:not(:disabled):hover {
                      background-color: ${Mixins.ColorHoverHover({
                          color: "primary",
                      })};
                      color: ${COLORS.WHITE};
                  }

                  &:not(:disabled):active {
                      background-color: ${Mixins.ColorHoverActive({
                          color: "primary",
                      })};
                  }

                  &:disabled {
                      background-color: ${COLORS.GRAY_GHOST};
                      color: ${COLORS.GRAY};
                  }
              `}
`
