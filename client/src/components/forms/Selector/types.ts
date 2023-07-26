/*=============================================== Selector types ===============================================*/

import type { ChangeEventHandler } from "react"

export interface SelectorProps {
    type?: "radio" | "checkbox"
    label: string
    id: string
    name?: string
    defaultChecked?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}
