/*=============================================== Grid types ===============================================*/

import type { ElementType, ReactNode, HTMLAttributes } from "react"
import type { GridProps as GridBase } from "components/types"

export interface GridProps extends HTMLAttributes<HTMLDivElement>, GridBase {
    as?: ElementType
    children?: ReactNode | ReactNode[]
}
