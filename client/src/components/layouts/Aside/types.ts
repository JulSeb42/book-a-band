/*=============================================== Aside types ===============================================*/

import type { ElementType, ReactNode } from "react"

export interface AsideProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    center?: boolean
}
