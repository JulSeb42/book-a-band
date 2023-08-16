/*=============================================== ResetPassword ===============================================*/

import { Page, Text } from "components"
import { ResetPasswordForm } from "pages/auth/ResetPassword/ResetPasswordForm"

export function ResetPassword() {
    return (
        <Page title="Reset your password" mainSize="form">
            <Text tag="h1">Reset your password</Text>
            <ResetPasswordForm />
        </Page>
    )
}
