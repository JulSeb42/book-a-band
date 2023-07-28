/*=============================================== Form types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"
import type { ErrorMessageType } from "types"

type ButtonSecondaryLink = {
    text: string
    to: string
    onClick?: never
}

type ButtonSecondaryClick = {
    text: string
    to?: never
    onClick: () => void
}

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    buttonPrimary?: string
    buttonSecondary?: ButtonSecondaryLink | ButtonSecondaryClick
    isLoading?: boolean
    error?: ErrorMessageType
}
