/*=============================================== Wrapper types ===============================================*/

import type { ReactNode, ElementType } from "react"

export interface WrapperProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    reverse?: boolean
}
