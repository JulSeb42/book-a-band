/*=============================================== DashboardArtists ===============================================*/

import { AdminLayout, UsersListDashboard } from "components"

export function DashboardArtists() {
    return (
        <AdminLayout title="Artists">
            <UsersListDashboard page="artists" />
        </AdminLayout>
    )
}
