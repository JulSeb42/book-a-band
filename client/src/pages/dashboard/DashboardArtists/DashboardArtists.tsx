/*=============================================== DashboardArtists ===============================================*/

import { useState } from "react"

import { AdminLayout, Flexbox, SearchDashboard } from "components"
import { List } from "pages/dashboard/DashboardArtists/List"
import { useFetchUsers, useAdminParams } from "hooks"

export const DashboardArtists = () => {
    const { status } = useAdminParams()

    const [search, setSearch] = useState("")
    const {
        users,
        loading,
        errorMessage,
        isChangeLoading,
        setIsChangeLoading,
    } = useFetchUsers({
        role: "artist",
        search,
        status,
    })

    return (
        <AdminLayout title="Artists">
            <SearchDashboard
                search={search}
                setSearch={setSearch}
                isArtistsList
            />

            <Flexbox gap="s" flexDirection="column" alignItems="stretch">
                <List
                    artists={users}
                    isLoading={loading}
                    errorMessage={errorMessage}
                    isChangeLoading={isChangeLoading}
                    setIsChangeLoading={setIsChangeLoading}
                />
            </Flexbox>
        </AdminLayout>
    )
}
