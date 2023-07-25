/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { SPACERS, COLORS, FONT_SIZES } from "components"
import type {
    SpacerProps,
    FontSizesTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    ColorsTypes,
    ColorsHoverTypes,
} from "components/types"

export const Mixins = {
    Color: ({ color }: { color: ColorsTypes }) => css`
        ${color === "black"
            ? COLORS.BLACK
            : color === "white"
            ? COLORS.WHITE
            : color === "dark-gray"
            ? COLORS.DARK_GRAY
            : color === "dark-gray-hover"
            ? COLORS.DARK_GRAY_HOVER
            : color === "dark-gray-active"
            ? COLORS.DARK_GRAY_ACTIVE
            : color === "dark-gray-ghost"
            ? COLORS.DARK_GRAY_GHOST
            : color === "gray"
            ? COLORS.GRAY
            : color === "gray-hover"
            ? COLORS.GRAY_HOVER
            : color === "gray-active"
            ? COLORS.GRAY_ACTIVE
            : color === "gray-ghost"
            ? COLORS.GRAY_GHOST
            : color === "primary"
            ? COLORS.PRIMARY
            : color === "primary-hover"
            ? COLORS.PRIMARY_HOVER
            : color === "primary-active"
            ? COLORS.PRIMARY_ACTIVE
            : color === "primary-ghost"
            ? COLORS.PRIMARY_GHOST
            : color === "success"
            ? COLORS.SUCCESS
            : color === "success-hover"
            ? COLORS.SUCCESS_HOVER
            : color === "success-active"
            ? COLORS.SUCCESS_ACTIVE
            : color === "success-ghost"
            ? COLORS.SUCCESS_GHOST
            : color === "danger"
            ? COLORS.DANGER
            : color === "danger-hover"
            ? COLORS.DANGER_HOVER
            : color === "danger-active"
            ? COLORS.DANGER_ACTIVE
            : color === "danger-ghost"
            ? COLORS.DANGER_GHOST
            : color}
    `,

    ColorHoverDefault: ({ color }: { color: ColorsHoverTypes }) => css`
        ${color === "primary"
            ? COLORS.PRIMARY
            : color === "success"
            ? COLORS.SUCCESS
            : color === "danger"
            ? COLORS.DANGER
            : color === "white" && COLORS.WHITE}
    `,

    ColorHoverHover: ({ color }: { color: ColorsHoverTypes }) =>
        css`
            ${color === "primary"
                ? COLORS.PRIMARY_HOVER
                : color === "success"
                ? COLORS.SUCCESS_HOVER
                : color === "danger"
                ? COLORS.DANGER_HOVER
                : color === "white" && COLORS.GRAY_GHOST}
        `,

    ColorHoverActive: ({ color }: { color: ColorsHoverTypes }) =>
        css`
            ${color === "primary"
                ? COLORS.PRIMARY_ACTIVE
                : color === "success"
                ? COLORS.SUCCESS_ACTIVE
                : color === "danger"
                ? COLORS.DANGER_ACTIVE
                : color === "white" && COLORS.GRAY_ACTIVE}
        `,

    FontSize: (fontSize: FontSizesTypes | "inherit") => {
        switch (fontSize) {
            case "h1":
                return FONT_SIZES.H1
            case "h2":
                return FONT_SIZES.H2
            case "h3":
                return FONT_SIZES.H3
            case "h4":
                return FONT_SIZES.H4
            case "h5":
                return FONT_SIZES.H5
            case "h6":
                return FONT_SIZES.H6
            case "small":
                return FONT_SIZES.SMALL
            case "inherit":
                return null
            default:
                return FONT_SIZES.BODY
        }
    },

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
    }: {
        inline?: boolean
        flexDirection?: FlexDirectionTypes
        flexWrap?: FlexWrapTypes
        justifyContent?: FlexJustifyContentTypes
        alignItems?: FlexAlignItemsTypes
        justifyItems?: FlexJustifyItemsTypes
        alignContent?: FlexAlignContentTypes
        gap?: SpacersTypes
        columnGap?: SpacersTypes
        rowGap?: SpacersTypes
    }) => css`
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
    }: {
        inline?: boolean
        col?: number | string
        gap?: SpacersTypes
        columnGap?: SpacersTypes
        rowGap?: SpacersTypes
        justifyItems?: GridJustifyItemsTypes
        alignItems?: GridAlignItemsTypes
        justifyContent?: GridJustifyContentTypes
        alignContent?: GridAlignContentTypes
    }) => css`
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

    HideScrollbar: css`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
}
