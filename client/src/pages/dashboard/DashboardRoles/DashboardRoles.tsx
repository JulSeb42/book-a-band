/*=============================================== DashboardRoles ===============================================*/

import { AdminLayout, UsersListDashboard } from "components"

export const DashboardRoles = () => {
    return (
        <AdminLayout title="Roles">
            <UsersListDashboard page="roles" />
        </AdminLayout>
    )
}
