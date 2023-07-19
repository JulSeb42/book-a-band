/*=============================================== Type values ===============================================*/

export const typeValues = {
    colors: {
        black: "black",
        white: "white",
        gray800: "gray800",
        gray500: "gray500",
        gray300: "gray300",
        gray50: "gray50",
        primary500: "primary500",
        primary300: "primary300",
        success500: "success500",
        success300: "success300",
        danger500: "danger500",
        danger300: "danger300",
        danger50: "danger50",
    },
    colorsShort: {
        primary: "primary",
        success: "success",
        danger: "danger",
        gray: "gray",
        black: "black",
        white: "white",
    },
    overlays: { black: "black", gradient: "gradient" },
    fontSizes: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        body: "body",
        small: "small",
    },
    fontWeights: { regular: "regular", bold: "bold", black: "black" },
    radiuses: {
        xxl: "xxl",
        xl: "xl",
        l: "l",
        m: "m",
        s: "s",
        xs: "xs",
        round: "round",
        circle: "circle",
    },
    spacers: {
        xxl: "xxl",
        xl: "xl",
        l: "l",
        m: "m",
        s: "s",
        xs: "xs",
        xxs: "xxs",
    },
    textAlign: {
        left: "left",
        center: "center",
        right: "right",
        justify: "justify",
        inherit: "inherit",
        initial: "initial",
        revert: "revert",
        "revert-layer": "revert-layer",
        unset: "unset",
    },
    gridJustifyItems: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
    },
    gridAlignItems: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
    },
    gridJustifyContent: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
        "space-around": "space-around",
        "space-between": "space-between",
        "space-evenly": "space-evenly",
    },
    gridAlignContent: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
        "space-around": "space-around",
        "space-between": "space-between",
        "space-evenly": "space-evenly",
    },
    flexDirection: {
        row: "row",
        "row-reverse": "row-reverse",
        column: "column",
        "column-reverse": "column-reverse",
    },
    flexWrap: {
        nowrap: "nowrap",
        wrap: "wrap",
        "wrap-reverse": "wrap-reverse",
    },
    flexJustifyContent: {
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        "space-between": "space-between",
        "space-around": "space-around",
        "space-evenly": "space-evenly",
    },
    flexAlignItems: {
        stretch: "stretch",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        baseline: "baseline",
    },
    flexJustifyItems: {
        normal: "normal",
        stretch: "stretch",
        baseline: "baseline",
        center: "center",
        start: "start",
        end: "end",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        "self-start": "self-start",
        "self-end": "self-end",
        left: "left",
        right: "right",
        legacy: "legacy",
    },
    flexAlignContent: {
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        "space-between": "space-between",
        "space-around": "space-around",
        "space-evenly": "space-evenly",
        stretch: "stretch",
        normal: "normal",
    },
    objectFit: {
        contain: "contain",
        cover: "cover",
        fill: "fill",
        none: "none",
        "scale-down": "scale-down",
        inherit: "inherit",
        initial: "initial",
        revert: "revert",
        "revert-layer": "revert-layer",
        unset: "unset",
    },
} as const
