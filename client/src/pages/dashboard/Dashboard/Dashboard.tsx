/*=============================================== Dashboard ===============================================*/

import { useState, useEffect } from "react"

import { userService } from "api"

import { AdminLayout, Flexbox } from "components"
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

    return (
        <AdminLayout title="Dashboard">
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
