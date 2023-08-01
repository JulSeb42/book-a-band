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

export type ButtonIconProps = ButtonIconPropsButton | ButtonIconPropsLink
