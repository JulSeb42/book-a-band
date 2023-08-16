/*=============================================== Select types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import type { InputContainerBaseProps } from "components/forms/InputComponents/types"

export interface SelectProps extends InputContainerBaseProps {
    value: string
    setValue: Dispatch<SetStateAction<string>>
    options: string[]
    setIsLoading?: Dispatch<SetStateAction<boolean>>
}
