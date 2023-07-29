/*=============================================== MarkdownEditor ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import { InputContainer } from "components/forms/InputComponents"
import type { InputContainerBaseProps } from "components/forms/InputComponents/types"

interface MarkdownEditorProps extends InputContainerBaseProps {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

export const MarkdownEditor = ({}: MarkdownEditorProps) => {
    return <InputContainer></InputContainer>
}
