/*=============================================== AdminDashboard ===============================================*/

import { useContext } from "react"

import { AuthContext, type AuthContextType } from "context"

import { Page, Text } from "components"
import { NotFound } from "pages/NotFound"
import { UsersList } from "pages/AdminDashboard/sections"

export const AdminDashboard = () => {
    const { user } = useContext(AuthContext) as AuthContextType

    if (user?.role !== "admin") return <NotFound />

    return (
        <Page title="Dashboard" mainSize="large">
            <Text tag="h1">Dashboard</Text>
            <UsersList />
        </Page>
    )
}
