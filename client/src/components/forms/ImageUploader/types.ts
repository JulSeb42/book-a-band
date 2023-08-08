/*=============================================== ImageUploader types ===============================================*/

import type { Dispatch, SetStateAction, HTMLAttributes } from "react"

import type { InputContainerBaseProps } from "components/forms/InputComponents/types"

export interface ImageUploaderProps
    extends InputContainerBaseProps,
        HTMLAttributes<HTMLInputElement> {
    image: string
    setImage: Dispatch<SetStateAction<File>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    value?: never
}
