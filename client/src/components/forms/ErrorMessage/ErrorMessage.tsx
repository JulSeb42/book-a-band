/*=============================================== ErrorMessage component ===============================================*/

import { StyledErrorMessage } from "components/forms/ErrorMessage/styles"
import type { ErrorMessageProps } from "components/forms/ErrorMessage/types"

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
    if (!error) return null

    return (
        <StyledErrorMessage>{error?.response?.data.message}</StyledErrorMessage>
    )
}
