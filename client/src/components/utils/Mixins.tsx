/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { SPACERS, COLORS } from "components"
import type { SpacerProps, FlexboxProps, GridProps } from "components/types"

export const Mixins = {
    Spacers: ({ spacer }: SpacerProps) => css`
        ${spacer === "xxl"
            ? SPACERS.XXL
            : spacer === "xl"
            ? SPACERS.XL
            : spacer === "l"
            ? SPACERS.L
            : spacer === "m"
            ? SPACERS.M
            : spacer === "s"
            ? SPACERS.S
            : spacer === "xs"
            ? SPACERS.XS
            : spacer === "xxs"
            ? SPACERS.XXS
            : stringifyPx(spacer)}
    `,
    Flexbox: ({
        inline,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        justifyItems,
        alignContent,
        gap,
        columnGap,
        rowGap,
    }: FlexboxProps) => css`
        display: ${inline ? "inline-flex" : "flex"};
        flex-direction: ${flexDirection};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
        justify-items: ${justifyItems};
        align-items: ${alignItems};
        align-content: ${alignContent};
        gap: ${gap && Mixins.Spacers({ spacer: gap })};
        column-gap: ${columnGap && Mixins.Spacers({ spacer: columnGap })};
        row-gap: ${rowGap && Mixins.Spacers({ spacer: rowGap })};
    `,

    Grid: ({
        inline,
        col,
        gap,
        columnGap,
        rowGap,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
    }: GridProps) => css`
        display: ${inline ? "inline-grid" : "grid"};
        grid-template-columns: ${col && typeof col === "number"
            ? `repeat(${col}, 1fr)`
            : col};
        gap: ${gap && stringifyPx(gap)};
        column-gap: ${columnGap && stringifyPx(columnGap)};
        row-gap: ${rowGap && stringifyPx(rowGap)};
        justify-content: ${justifyContent};
        justify-items: ${justifyItems};
        align-items: ${alignItems};
        align-content: ${alignContent};
    `,

    ColorAttribute: css`
        &[data-color="black"] {
            color: ${COLORS.BLACK};
        }

        &[data-color="white"] {
            color: ${COLORS.WHITE};
        }

        &[data-color="dark-gray"] {
            color: ${COLORS.DARK_GRAY};
        }

        &[data-color="dark-gray-hover"] {
            color: ${COLORS.DARK_GRAY_HOVER};
        }

        &[data-color="dark-gray-active"] {
            color: ${COLORS.DARK_GRAY_ACTIVE};
        }

        &[data-color="dark-gray-ghost"] {
            color: ${COLORS.DARK_GRAY_GHOST};
        }

        &[data-color="gray"] {
            color: ${COLORS.GRAY};
        }

        &[data-color="gray-hover"] {
            color: ${COLORS.GRAY_HOVER};
        }

        &[data-color="gray-active"] {
            color: ${COLORS.GRAY_ACTIVE};
        }

        &[data-color="gray-ghost"] {
            color: ${COLORS.GRAY_GHOST};
        }

        &[data-color="primary"] {
            color: ${COLORS.PRIMARY};
        }

        &[data-color="primary-hover"] {
            color: ${COLORS.PRIMARY_HOVER};
        }

        &[data-color="primary-active"] {
            color: ${COLORS.PRIMARY_ACTIVE};
        }

        &[data-color="primary-ghost"] {
            color: ${COLORS.PRIMARY_GHOST};
        }

        &[data-color="success"] {
            color: ${COLORS.SUCCESS};
        }

        &[data-color="success-hover"] {
            color: ${COLORS.SUCCESS_HOVER};
        }

        &[data-color="success-active"] {
            color: ${COLORS.SUCCESS_ACTIVE};
        }

        &[data-color="success-ghost"] {
            color: ${COLORS.SUCCESS_GHOST};
        }

        &[data-color="danger"] {
            color: ${COLORS.DANGER};
        }

        &[data-color="danger-hover"] {
            color: ${COLORS.DANGER_HOVER};
        }

        &[data-color="danger-active"] {
            color: ${COLORS.DANGER_ACTIVE};
        }

        &[data-color="danger-ghost"] {
            color: ${COLORS.DANGER_GHOST};
        }
    `,
}
