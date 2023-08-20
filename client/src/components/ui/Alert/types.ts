/*=============================================== Alert types ===============================================*/

import type { FormEvent, ReactNode } from "react"

export interface AlertProps {
    children?: ReactNode | ReactNode[] | string
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}
