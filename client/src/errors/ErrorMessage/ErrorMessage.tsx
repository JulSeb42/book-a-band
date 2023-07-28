/*=============================================== ErrorMessage component ===============================================*/

import { StyledErrorMessage } from "errors/ErrorMessage/styles"
import type { ErrorMessageProps } from "errors/ErrorMessage/types"

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
    if (!error) return null

    return (
        <StyledErrorMessage>{error?.response?.data.message}</StyledErrorMessage>
    )
}
