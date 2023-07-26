/*=============================================== SrOnly types ===============================================*/

import type { ElementType, ReactNode } from "react"

export interface SrOnlyProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
}
