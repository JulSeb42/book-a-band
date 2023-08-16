/*=============================================== RightContainer ===============================================*/

import {
    SectionDashboard,
    SectionArtists,
    SectionRoles,
} from "components/dashboard/UserLineDashboard/sections"

import type { UserLineDashboardProps } from "components/dashboard/UserLineDashboard/types"

export const RightContainer = ({
    user,
    page,
    setLoading,
    allUsers,
}: UserLineDashboardProps) => {
    if (page === "dashboard")
        return <SectionDashboard user={user} setLoading={setLoading} />

    if (page === "artists")
        return <SectionArtists user={user} setLoading={setLoading} />

    if (page === "roles")
        return (
            <SectionRoles
                user={user}
                setLoading={setLoading}
                allUsers={allUsers}
            />
        )
}
