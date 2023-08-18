/*=============================================== Variables ===============================================*/

export enum COLORS {
    BLACK = "var(--color-black)",
    WHITE = "var(--color-white)",
    DARK_GRAY = "var(--color-dark-gray)",
    DARK_GRAY_HOVER = "var(--color-dark-gray-hover)",
    DARK_GRAY_ACTIVE = "var(--color-dark-gray-active)",
    DARK_GRAY_GHOST = "var(--color-dark-gray-ghost)",
    GRAY = "var(--color-gray)",
    GRAY_HOVER = "var(--color-gray-hover)",
    GRAY_ACTIVE = "var(--color-gray-active)",
    GRAY_GHOST = "var(--color-gray-ghost)",
    PRIMARY = "var(--color-primary)",
    PRIMARY_HOVER = "var(--color-primary-hover)",
    PRIMARY_ACTIVE = "var(--color-primary-active)",
    PRIMARY_GHOST = "var(--color-primary-ghost)",
    SUCCESS = "var(--color-success)",
    SUCCESS_HOVER = "var(--color-success-hover)",
    SUCCESS_ACTIVE = "var(--color-success-active)",
    SUCCESS_GHOST = "var(--color-success-ghost)",
    DANGER = "var(--color-danger)",
    DANGER_HOVER = "var(--color-danger-hover)",
    DANGER_ACTIVE = "var(--color-danger-active)",
    DANGER_GHOST = "var(--color-danger-ghost)",
}

export enum OVERLAYS {
    BLACK = "var(--overlay-black)",
    BLACK_80 = "var(--overlay-black-80)",
    GRADIENT = "var(--overlay-gradient)",
    WHITE_DEFAULT = "var(--overlay-white-default)",
    WHITE_HOVER = "var(--overlay-white-hover)",
}

export const FONT_FAMILY = "var(--font-family-body)" as const

export enum FONT_SIZES {
    H1 = "var(--font-size-h1)",
    H2 = "var(--font-size-h2)",
    H3 = "var(--font-size-h3)",
    H4 = "var(--font-size-h4)",
    H5 = "var(--font-size-h5)",
    H6 = "var(--font-size-h6)",
    BODY = "var(--font-size-body)",
    SMALL = "var(--font-size-small)",
}

export enum FONT_WEIGHTS {
    REGULAR = "var(--font-weight-regular)",
    BOLD = "var(--font-weight-bold)",
    BLACK = "var(--font-weight-black)",
}

export const LINE_HEIGHT = "var(--line-height)" as const

export enum RADIUSES {
    XXL = "var(--radius-xxl)",
    XL = "var(--radius-xl)",
    L = "var(--radius-l)",
    M = "var(--radius-m)",
    S = "var(--radius-s)",
    XS = "var(--radius-xs)",
    ROUND = "var(--radius-round)",
    CIRCLE = "var(--radius-circle)",
}

export enum SPACERS {
    XXL = "var(--spacer-xxl)",
    XL = "var(--spacer-xl)",
    L = "var(--spacer-l)",
    M = "var(--spacer-m)",
    S = "var(--spacer-s)",
    XS = "var(--spacer-xs)",
    XXS = "var(--spacer-xxs)",
}

export enum CONTAINERS {
    MAIN_DEFAULT = "var(--main-default)",
    MAIN_FORM = "var(--main-form)",
    MAIN_LARGE = "var(--main-large)",
    ASIDE = "var(--aside-width)",
}

export enum TRANSITIONS {
    SHORT = "var(--transition-short)",
    LONG = "var(--transition-long)",
    BEZIER = "var(--transition-bezier)",
}

export enum BREAKPOINTS {
    TABLET = "(max-width: 1024px)",
    MOBILE = "(max-width: 600px)",
    TOUCH = "(hover: none) and (pointer: coarse)",
    HOVER = "(hover: hover)",
}

export const INPUT_HEIGHT = 32 as const
