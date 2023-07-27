/*=============================================== Selector types ===============================================*/

import type { ChangeEventHandler } from "react"

export interface SelectorProps {
    type?: "radio" | "checkbox"
    label: string
    id: string
    name?: string
    checked?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
}
