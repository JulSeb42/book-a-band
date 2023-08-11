/*=============================================== Dashboard ===============================================*/

import { useState } from "react"

import { AdminLayout, Flexbox, SearchDashboard } from "components"
import { UsersList } from "pages/dashboard/Dashboard/UsersList"
import { useAdminParams, useGetUsers } from "hooks"

export const Dashboard = () => {
    const { role } = useAdminParams()
    const [search, setSearch] = useState("")
    const { users, loading, errorMessage } = useGetUsers({ role, search })

    return (
        <AdminLayout title="Dashboard">
            <SearchDashboard search={search} setSearch={setSearch} />

            <Flexbox gap="s" flexDirection="column" alignItems="stretch">
                <UsersList
                    users={users}
                    isLoading={loading}
                    errorMessage={errorMessage}
                />
            </Flexbox>
        </AdminLayout>
    )
}
