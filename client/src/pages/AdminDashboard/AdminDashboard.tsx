/*=============================================== AdminDashboard ===============================================*/

import { useContext } from "react"

import { AuthContext, type AuthContextType } from "context"

import { AdminLayout, Text } from "components"
import { NotFound } from "pages/NotFound"
import { UsersList } from "pages/AdminDashboard/sections"

export const AdminDashboard = () => {
    const { user } = useContext(AuthContext) as AuthContextType

    if (user?.role !== "admin") return <NotFound />

    return (
        <AdminLayout title="Dashboard">
            <Text tag="h1">Dashboard</Text>
            <UsersList />
        </AdminLayout>
    )
}
