/*=============================================== AdminDashboard ===============================================*/

import { useContext } from "react"

import { AuthContext, type AuthContextType } from "context"

import { Page, Text } from "components"
import { NotFound } from "pages/NotFound"
import { ArtistsTabs } from "pages/AdminDashboard/ArtistsTabs"

export const AdminDashboard = () => {
    const { user } = useContext(AuthContext) as AuthContextType

    if (user?.role !== "admin") return <NotFound />

    return (
        <Page title="Dashboard">
            <Text tag="h1">Admin dashboard</Text>

            <ArtistsTabs />
        </Page>
    )
}
