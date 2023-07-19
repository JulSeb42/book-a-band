/*=============================================== Flexbox types ===============================================*/

import type { ReactNode, ElementType, HTMLAttributes } from "react"
import type { FlexboxProps as FlexProps } from "components/types"

export interface FlexboxProps
    extends HTMLAttributes<HTMLDivElement>,
        FlexProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
}
