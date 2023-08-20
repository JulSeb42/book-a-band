/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { COLORS, FONT_SIZES, SPACERS, RADIUSES } from "components"
import type {
    FontSizesType,
    FlexAlignContentType,
    FlexAlignItemsType,
    FlexDirectionType,
    FlexJustifyContentType,
    FlexJustifyItemsType,
    FlexWrapType,
    SpacersType,
    GridAlignContentType,
    GridAlignItemsType,
    GridJustifyContentType,
    GridJustifyItemsType,
    ColorsType,
    ColorsHoverType,
    BorderProps,
    RadiusesType,
    PaddingProps,
    typeValues,
} from "components/types"

type ColorsGhostType = Exclude<ColorsHoverType, "white">

export const Mixins = {
    Color: ({ color }: { color: ColorsType }) => {
        const colors = new Map<ColorsType, string>([
            ["black", COLORS.BLACK],
            ["white", COLORS.WHITE],
            ["dark-gray", COLORS.DARK_GRAY],
            ["dark-gray-hover", COLORS.DARK_GRAY_HOVER],
            ["dark-gray-active", COLORS.DARK_GRAY_ACTIVE],
            ["dark-gray-ghost", COLORS.DARK_GRAY_GHOST],
            ["gray", COLORS.GRAY],
            ["gray-hover", COLORS.GRAY_HOVER],
            ["gray-active", COLORS.GRAY_ACTIVE],
            ["gray-ghost", COLORS.GRAY_GHOST],
            ["primary", COLORS.PRIMARY],
            ["primary-hover", COLORS.PRIMARY_HOVER],
            ["primary-active", COLORS.PRIMARY_ACTIVE],
            ["primary-ghost", COLORS.PRIMARY_GHOST],
            ["success", COLORS.SUCCESS],
            ["success-hover", COLORS.SUCCESS_HOVER],
            ["success-active", COLORS.SUCCESS_ACTIVE],
            ["success-ghost", COLORS.SUCCESS_GHOST],
            ["danger", COLORS.DANGER],
            ["danger-hover", COLORS.DANGER_HOVER],
            ["danger-active", COLORS.DANGER_ACTIVE],
            ["danger-ghost", COLORS.DANGER_GHOST],
            ["transparent", "transparent"],
            ["currentColor", "currentColor"],
        ])

        return colors.get(color || "primary")
    },

    ColorHoverDefault: ({ color }: { color: ColorsHoverType }) => {
        const colors = new Map<ColorsHoverType, string>([
            ["primary", COLORS.PRIMARY],
            ["success", COLORS.SUCCESS],
            ["danger", COLORS.DANGER],
            ["white", COLORS.WHITE],
        ])

        return colors.get(color || "primary")
    },

    ColorHoverHover: ({ color }: { color: ColorsHoverType }) => {
        const colors = new Map<ColorsHoverType, string>([
            ["primary", COLORS.PRIMARY_HOVER],
            ["success", COLORS.SUCCESS_HOVER],
            ["danger", COLORS.DANGER_HOVER],
            ["white", COLORS.GRAY_GHOST],
        ])

        return colors.get(color || "primary")
    },

    ColorHoverActive: ({ color }: { color: ColorsHoverType }) => {
        const colors = new Map<ColorsHoverType, string>([
            ["primary", COLORS.PRIMARY_ACTIVE],
            ["success", COLORS.SUCCESS_ACTIVE],
            ["danger", COLORS.DANGER_ACTIVE],
            ["white", COLORS.GRAY_ACTIVE],
        ])

        return colors.get(color || "primary")
    },

    ColorGhostDefault: ({ color }: { color: ColorsGhostType }) => {
        const colors = new Map<ColorsGhostType, string>([
            ["primary", COLORS.PRIMARY_GHOST],
            ["success", COLORS.SUCCESS_GHOST],
            ["danger", COLORS.DANGER_GHOST],
        ])

        return colors.get(color || "primary")
    },

    ColorGhostHover: ({ color }: { color: ColorsGhostType }) => {
        const colors = new Map<ColorsGhostType, string>([
            ["primary", COLORS.PRIMARY_ACTIVE],
            ["success", COLORS.SUCCESS_ACTIVE],
            ["danger", COLORS.DANGER_ACTIVE],
        ])

        return colors.get(color || "primary")
    },

    ColorGhostActive: ({ color }: { color: ColorsGhostType }) => {
        const colors = new Map<ColorsGhostType, string>([
            ["primary", COLORS.PRIMARY_HOVER],
            ["success", COLORS.SUCCESS_HOVER],
            ["danger", COLORS.DANGER_HOVER],
        ])

        return colors.get(color || "primary")
    },

    FontSize: (fontSize: FontSizesType | "inherit") => {
        const sizes = new Map<FontSizesType | "inherit", string>([
            ["h1", FONT_SIZES.H1],
            ["h2", FONT_SIZES.H2],
            ["h3", FONT_SIZES.H3],
            ["h4", FONT_SIZES.H4],
            ["h5", FONT_SIZES.H5],
            ["h6", FONT_SIZES.H6],
            ["body", FONT_SIZES.BODY],
            ["small", FONT_SIZES.SMALL],
            ["inherit", "inherit"],
        ])

        return sizes.get(fontSize || "body")
    },

    Spacers: ({ spacer = null }: { spacer?: SpacersType | null }) => {
        if (!spacer) return null

        if (typeof spacer === "number") return stringifyPx(spacer)

        const spacers = new Map([
            ["xxl", SPACERS.XXL],
            ["xl", SPACERS.XL],
            ["l", SPACERS.L],
            ["m", SPACERS.M],
            ["s", SPACERS.S],
            ["xs", SPACERS.XS],
            ["xxs", SPACERS.XXS],
        ])

        return spacers.get(spacer)
    },

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
        flexDirection?: FlexDirectionType
        flexWrap?: FlexWrapType
        justifyContent?: FlexJustifyContentType
        alignItems?: FlexAlignItemsType
        justifyItems?: FlexJustifyItemsType
        alignContent?: FlexAlignContentType
        gap?: SpacersType
        columnGap?: SpacersType
        rowGap?: SpacersType
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
        gap?: SpacersType
        columnGap?: SpacersType
        rowGap?: SpacersType
        justifyItems?: GridJustifyItemsType
        alignItems?: GridAlignItemsType
        justifyContent?: GridJustifyContentType
        alignContent?: GridAlignContentType
    }) => css`
        display: ${inline ? "inline-grid" : "grid"};
        grid-template-columns: ${col && typeof col === "number"
            ? `repeat(${col}, 1fr)`
            : col};
        gap: ${gap && Mixins.Spacers({ spacer: gap })};
        column-gap: ${columnGap && Mixins.Spacers({ spacer: columnGap })};
        row-gap: ${rowGap && Mixins.Spacers({ spacer: rowGap })};
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

    Border: ({ style, width, color }: BorderProps) => css`
        border-style: ${style ? style : width || color ? "solid" : undefined};
        border-width: ${width
            ? stringifyPx(width)
            : style || color
            ? 1
            : undefined};
        border-color: ${color
            ? Mixins.Color({ color })
            : width || style
            ? COLORS.GRAY_ACTIVE
            : undefined};
    `,

    BorderRadius: ({ borderRadius }: { borderRadius?: RadiusesType }) => {
        type RadiusType =
            | keyof typeof typeValues.radiuses
            | number
            | null
            | undefined

        const radiusMap = new Map<RadiusType, string>([
            ["xxl", RADIUSES.XXL],
            ["xl", RADIUSES.XL],
            ["l", RADIUSES.L],
            ["m", RADIUSES.M],
            ["s", RADIUSES.S],
            ["xs", RADIUSES.XS],
            ["round", RADIUSES.ROUND],
            ["circle", RADIUSES.CIRCLE],
        ])

        const getRadius = (radius: RadiusType) => {
            if (!radius) return null

            if (typeof radius === "number") return stringifyPx(radius)

            return radiusMap.get(radius)
        }

        return css`
            border-top-left-radius: ${getRadius(
                typeof borderRadius === "object"
                    ? borderRadius?.topLeft
                    : borderRadius
            )};
            border-top-right-radius: ${getRadius(
                typeof borderRadius === "object"
                    ? borderRadius?.topRight
                    : borderRadius
            )};
            border-bottom-left-radius: ${getRadius(
                typeof borderRadius === "object"
                    ? borderRadius?.bottomLeft
                    : borderRadius
            )};
            border-bottom-right-radius: ${getRadius(
                typeof borderRadius === "object"
                    ? borderRadius?.bottomRight
                    : borderRadius
            )};
        `
    },

    Padding: ({ padding = null }: PaddingProps) => css`
        padding-left: ${Mixins.Spacers({
            spacer:
                typeof padding === "object"
                    ? padding?.left || padding?.leftRight
                    : padding,
        })};
        padding-right: ${Mixins.Spacers({
            spacer:
                typeof padding === "object"
                    ? padding?.right || padding?.leftRight
                    : padding,
        })};
        padding-top: ${Mixins.Spacers({
            spacer:
                typeof padding === "object"
                    ? padding?.top || padding?.topBottom
                    : padding,
        })};
        padding-bottom: ${Mixins.Spacers({
            spacer:
                typeof padding === "object"
                    ? padding?.bottom || padding?.topBottom
                    : padding,
        })};
    `,
}
