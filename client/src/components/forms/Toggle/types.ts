/*=============================================== Toggle types ===============================================*/

import type { ChangeEventHandler, HTMLAttributes } from "react"

export interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
    type?: never
    checked: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
}
