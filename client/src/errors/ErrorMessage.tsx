/*=============================================== ErrorMessage component ===============================================*/

import { Alert } from "components"

import type { ErrorMessageType } from "types"

interface ErrorMessageProps {
    error: ErrorMessageType
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    if (!error) return null

    return <Alert>{error?.response?.data.message}</Alert>
}
