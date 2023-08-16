/*=============================================== Dashboard ===============================================*/

import { AdminLayout, UsersListDashboard } from "components"

export function Dashboard() {
    return (
        <AdminLayout title="Dashboard">
            <UsersListDashboard page="dashboard" />
        </AdminLayout>
    )
}
