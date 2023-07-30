/*=============================================== InputComponents types ===============================================*/

import type { ReactNode } from "react"

import type { ColorsType } from "components/types"
import type { ValidationStatusType } from "types"

export type ValidationInputHelperType = {
    status: ValidationStatusType
    message: string
}

export interface InputRightContainerProps {
    children?: ReactNode | ReactNode[]
}

export interface InputIconProps {
    icon: string
}

export interface InputValidationIconProps {
    status: ValidationStatusType
}

export interface InputContainerBaseProps {
    id?: string
    label?: string
    helper?:
        | string
        | {
              text: string | JSX.Element
              icon?: string
              iconColor?: ColorsType
          }
        | undefined
    isLoading?: boolean
    validation?: ValidationInputHelperType
}

export interface InputContainerProps extends InputContainerBaseProps {
    children?: ReactNode | ReactNode[]
}
