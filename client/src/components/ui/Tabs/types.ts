/*=============================================== Tabs types ===============================================*/

import type { ReactNode } from "react"

export interface TabsContainerProps {
    children?: ReactNode | ReactNode[]
}

export interface TabsButtonsContainerProps {
    children?: ReactNode | ReactNode[]
}

export interface TabButtonProps {
    children?: ReactNode | ReactNode[]
    isActive: boolean
    onClick: () => void
}

export interface TabProps {
    children?: ReactNode | ReactNode[]
    isActive: boolean
}
