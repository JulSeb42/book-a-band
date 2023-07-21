/*=============================================== InputComponents types ===============================================*/

import type { ReactNode } from "react"

import type { ColorsTypes } from "components/types"

const validationStatus = {
    passed: "passed",
    "not-passed": "not-passed",
} as const

export type ValidationStatusTypes = keyof typeof validationStatus

export interface InputRightContainerProps {
    children?: ReactNode | ReactNode[]
}

export interface InputIconProps {
    icon: string
}

export interface InputValidationProps {
    status: ValidationStatusTypes
}

export interface InputContainerBaseProps {
    label?: string
    helper?:
        | string
        | {
              text: string | null
              icon: string | null
              iconColor?: ColorsTypes
          }
}

export interface InputContainerProps extends InputContainerBaseProps {
    id?: string
    children?: ReactNode | ReactNode[]
}
