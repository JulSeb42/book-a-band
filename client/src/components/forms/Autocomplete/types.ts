/*=============================================== Autocomplete types ===============================================*/

import type { InputProps } from "components/forms/Input/types"

export type AutocompleteProps = InputProps & {
    options: string[]
    value: string
	setValue: (value: string) => void
	onChange?: never
}
