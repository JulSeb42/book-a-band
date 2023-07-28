/*=============================================== VerificationFailed ===============================================*/

import type { AxiosError } from "axios"

import { Page, Text } from "components"

interface VerificationFailedProps {
    error: AxiosError
}

export const VerificationFailed = ({ error }: VerificationFailedProps) => {
    return (
        <Page title="Verify your account">
            <Text tag="h1">Verification failed</Text>

            <Text>
                Your account could not be verified, please try again later.
            </Text>

            <Text>{error.message}</Text>
        </Page>
    )
}