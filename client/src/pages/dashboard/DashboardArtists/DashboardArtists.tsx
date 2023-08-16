/*=============================================== DashboardArtists ===============================================*/

import { AdminLayout, UsersListDashboard } from "components"

export const DashboardArtists = () => {
    return (
        <AdminLayout title="Artists">
            <UsersListDashboard page="artists" />
        </AdminLayout>
    )
}
