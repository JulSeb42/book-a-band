/*=============================================== EditPassword ===============================================*/

import { Page, Text } from "components"
import { EditPasswordForm } from "pages/account/EditPassword/EditPasswordForm"

export const EditPassword = () => {
    const PAGE_TITLE = "Edit your password"

    return (
        <Page title={PAGE_TITLE} mainSize="form">
            <Text tag="h1">{PAGE_TITLE}</Text>

            <EditPasswordForm />
        </Page>
    )
}
