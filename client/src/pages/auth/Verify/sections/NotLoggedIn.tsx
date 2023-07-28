/*=============================================== NotLoggedIn ===============================================*/

import { Page, Text } from "components"

export const NotLoggedIn = () => {
    return (
        <Page title="Verify your account">
            <Text tag="h1">You are not logged in!</Text>

            <Text>Please log in to verify your account.</Text>
        </Page>
    )
}
