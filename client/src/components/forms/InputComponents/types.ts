/*=============================================== InputComponents types ===============================================*/

import type { ReactNode } from "react"

import type { ColorsType } from "components/types"
import type { ValidationStatusType } from "types"

export type ValidationInputHelperType = {
    status: ValidationStatusType | undefined
    message: string
}

export interface InputRightContainerProps {
    children?: ReactNode | ReactNode[]
}

export interface InputIconProps {
    icon: string
}

export interface InputValidationIconProps {
    status: ValidationStatusType | undefined
}

export interface InputContainerBaseProps {
    label?: string
    helper?:
        | string
        | {
              text: string | null
              icon: string | null
              iconColor?: ColorsType
          }
        | undefined
    isLoading?: boolean
    validation?: ValidationInputHelperType
}

export interface InputContainerProps extends InputContainerBaseProps {
    id?: string
    children?: ReactNode | ReactNode[]
}
