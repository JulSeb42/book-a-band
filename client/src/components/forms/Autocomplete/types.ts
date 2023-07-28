/*=============================================== Autocomplete types ===============================================*/

import type { Dispatch, SetStateAction } from "react"
import type { InputProps } from "components/forms/Input/types"
import type { ValidationStatusType } from "types"

export type AutocompleteProps = InputProps & {
    options: string[]
    value: string
    setValue: (value: string) => void
    onChange?: never
    setValidation?: Dispatch<SetStateAction<ValidationStatusType | undefined>>
}
