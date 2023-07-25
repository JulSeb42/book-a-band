/*=============================================== Input types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type {
    ValidationStatusTypes,
    InputContainerBaseProps,
} from "components/forms/InputComponents/types"

interface InputPropsBase
    extends InputContainerBaseProps,
        InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    validation?: ValidationStatusTypes
    keys?: string[]
}

interface InputTextProps extends InputPropsBase {
    type?: "text" | "search" | "number" | "email" | "url" | "date"
    icon?: string
}

interface InputTextareaProps extends InputPropsBase {
    type?: "textarea"
    icon?: never
}

export type InputProps = InputTextProps | InputTextareaProps

// Types =>
// password, select, textarea, check,
