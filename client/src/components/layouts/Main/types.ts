/*=============================================== Main types ===============================================*/

import type { ReactNode, ElementType } from "react"

const mainSizes = { default: "default", form: "form" } as const
export type MainSizesTypes = keyof typeof mainSizes

export interface MainProps {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    size?: MainSizesTypes
}
