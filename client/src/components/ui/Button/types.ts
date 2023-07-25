/*=============================================== Button types ===============================================*/

import type { ElementType, ButtonHTMLAttributes, HTMLAttributes } from "react"
import type { ColorsHoverTypes } from "components/types"

const buttonVariants = { plain: "plain", transparent: "transparent" } as const
export type ButtonVariantsTypes = keyof typeof buttonVariants

const buttonSizes = { default: "default", small: "small" } as const
export type ButtonSizesTypes = keyof typeof buttonSizes

interface ButtonPropsBase
    extends HTMLAttributes<HTMLButtonElement & HTMLAnchorElement>,
        ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
    as?: ElementType
    color?: ColorsHoverTypes
    size?: ButtonSizesTypes
    isLoading?: boolean
    icons?: {
        left?: string
        right?: string
    }
}

interface ButtonPropsVariantsBackground extends ButtonPropsBase {
    variant?: "plain"
    noPadding?: never
}

interface ButtonPropsVariantsTransparent extends ButtonPropsBase {
    variant?: "transparent"
    noPadding?: boolean
}

type ButtonPropsVariants =
    | ButtonPropsVariantsBackground
    | ButtonPropsVariantsTransparent

type ButtonPropsButton = ButtonPropsVariants & {
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    to?: never
    blank?: never
}

type ButtonPropsLink = ButtonPropsVariants & {
    disabled?: never
    type?: never
    to?: string
    blank?: boolean
}

export type ButtonProps = ButtonPropsButton | ButtonPropsLink
