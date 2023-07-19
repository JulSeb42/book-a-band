/*=============================================== Main types ===============================================*/

import type { ReactNode, ElementType, CSSProperties } from "react"

const mainSizes = { default: "default", form: "form" } as const
export type MainSizesTypes = keyof typeof mainSizes

export interface MainProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    className?: string
    size?: MainSizesTypes
    style?: CSSProperties
}
