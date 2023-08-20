/*=============================================== DashboardRoles ===============================================*/

import { AdminLayout, UsersListDashboard } from "components"

export function DashboardRoles() {
    return (
        <AdminLayout title="Roles">
            <UsersListDashboard page="roles" />
        </AdminLayout>
    )
}
