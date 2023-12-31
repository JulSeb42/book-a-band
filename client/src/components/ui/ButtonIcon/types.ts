/*=============================================== ButtonIcon types ===============================================*/

import type { ElementType, HTMLAttributes, ButtonHTMLAttributes } from "react"

import type { ColorsHoverType } from "components/types"
import type { ButtonVariantsType } from "components/ui/Button/types"

interface ButtonIconPropsBase
    extends HTMLAttributes<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    icon: string
    color?: ColorsHoverType
    variant?: ButtonVariantsType
    size?: number
    isLoading?: boolean
}

interface ButtonIconPropsButton extends ButtonIconPropsBase {
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    to?: never
    blank?: never
}

interface ButtonIconPropsLink extends ButtonIconPropsBase {
    disabled?: never
    type?: never
    to?: string
    blank?: boolean
}

type ButtonIconBehaviour = ButtonIconPropsButton | ButtonIconPropsLink

type ButtonIconLabelShow = ButtonIconBehaviour & {
    label?: string
    showLabel?: boolean
}

type ButtonIconLabelHide = ButtonIconBehaviour & {
    label?: undefined
    showLabel?: never
}

export type ButtonIconProps = ButtonIconLabelShow | ButtonIconLabelHide

interface ButtonIconStylePropsBase {
    $size: number
}

interface ButtonIconStyleGhost extends ButtonIconStylePropsBase {
    $variant: "ghost"
    $color: Exclude<ColorsHoverType, "white">
}

interface ButtonIconStyleOther extends ButtonIconStylePropsBase {
    $variant: Exclude<ButtonVariantsType, "ghost">
    $color: ColorsHoverType
}

export type ButtonIconStyleProps = ButtonIconStyleGhost | ButtonIconStyleOther
