/*=============================================== Dashboard ===============================================*/

import { useState, useEffect } from "react"
import Fuse from "fuse.js"

import { userService } from "api"

import { AdminLayout, Flexbox, SearchDashboard } from "components"
import { UsersList } from "pages/dashboard/Dashboard/UsersList"
import { useAdminParams } from "hooks"
import type { UserType } from "types"

export const Dashboard = () => {
    const { role } = useAdminParams()

    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    )

    const [search, setSearch] = useState("")

    useEffect(() => {
        userService
            .allUsers({ role })
            .then(res => {
                const userData: UserType[] = res.data

                setUsers(
                    userData
                        .sort((a, b) => {
                            return a.createdAt > b.createdAt ? -1 : 0
                        })
                        .sort(user => (user.role === "admin" ? -1 : 0))
                )
                setLoading(false)
            })
            .catch(err => setErrorMessage(err.response.data.message))
    }, [role])

    const fuse = new Fuse(users, {
        keys: ["fullName"],
    })
    const results = fuse.search(search).map(option => option.item)

    return (
        <AdminLayout title="Dashboard">
            <SearchDashboard search={search} setSearch={setSearch} />

            <Flexbox gap="s" flexDirection="column" alignItems="stretch">
                <UsersList
                    users={search.length ? results : users}
                    isLoading={loading}
                    errorMessage={errorMessage}
                />
            </Flexbox>
        </AdminLayout>
    )
}
