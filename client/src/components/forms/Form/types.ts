/*=============================================== Form types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"

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
	children?: ReactNode[]
    buttonPrimary?: string
    buttonSecondary?: ButtonSecondaryLink | ButtonSecondaryClick
}
