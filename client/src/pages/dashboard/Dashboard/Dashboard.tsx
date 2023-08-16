/*=============================================== Dashboard ===============================================*/

import { AdminLayout, UsersListDashboard } from "components"

export const Dashboard = () => {
    return (
        <AdminLayout title="Dashboard">
            <UsersListDashboard page="dashboard" />
        </AdminLayout>
    )
}
