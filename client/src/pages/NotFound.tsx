/*=============================================== NotFound ===============================================*/

import { Link } from "react-router-dom"

import { Page, Text } from "components"
import { PATHS } from "data"

export function NotFound() {
    return (
        <Page title="404">
            <Text tag="h1">Page not found!</Text>

            <Text>
                <Link to={PATHS.ROOT}>Back to homepage.</Link>
            </Text>
        </Page>
    )
}
