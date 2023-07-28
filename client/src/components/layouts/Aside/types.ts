/*=============================================== Aside types ===============================================*/

import type { ElementType, ReactNode } from "react"

import type { SpacersType } from "components/types"

export interface AsideProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    center?: boolean
    gap?: SpacersType
}
