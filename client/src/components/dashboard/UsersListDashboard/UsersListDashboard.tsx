/*=============================================== ArtistsListDashboard ===============================================*/

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { userService } from "api"

import { Flexbox, SearchDashboard } from "components"
import { List } from "components/dashboard/UsersListDashboard/List"
import { useAdminParams } from "hooks"
import { getFuseUsers } from "utils"
import { PATHS } from "data"

import type { UserType } from "types"
import type { UserLinePageType } from "components/dashboard/UserLineDashboard/types"

interface UsersListDashboardProps {
    page: UserLinePageType
}

export const UsersListDashboard = ({ page }: UsersListDashboardProps) => {
    const { pathname } = useLocation()

    const { role, status } = useAdminParams()

    const [search, setSearch] = useState("")
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    )

    useEffect(() => {
        const getData = async () =>
            await userService
                .users({
                    role:
                        pathname === PATHS.DASHBOARD_ARTISTS ? "artist" : role,
                    status:
                        pathname === PATHS.DASHBOARD_ARTISTS
                            ? status
                            : undefined,
                })
                .then(res => {
                    const usersData: UserType[] = res.data.sort(
                        (user: UserType) => (user.role === "admin" ? -1 : 0)
                    )

                    if (search && search.length)
                        setUsers(getFuseUsers(usersData, search, ["fullName"]))
                    else setUsers(usersData)

                    setLoading(false)
                })
                .catch(err => setErrorMessage(err.response.data.message))

        if (loading) getData()
    }, [loading, pathname, role, search, status])

    return (
        <>
            <SearchDashboard
                search={search}
                setSearch={setSearch}
                setLoading={setLoading}
            />

            <Flexbox gap="s" flexDirection="column" alignItems="stretch">
                <List
                    users={users}
                    loading={loading}
                    setLoading={setLoading}
                    errorMessage={errorMessage}
                    page={page}
                />
            </Flexbox>
        </>
    )
}
