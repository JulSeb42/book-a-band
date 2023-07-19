/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { SPACERS } from "components"
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
}
