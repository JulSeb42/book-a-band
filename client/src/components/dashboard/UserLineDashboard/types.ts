/*=============================================== UserLineDashboard types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import type { UserType } from "types"

export type UserLinePageType = "dashboard" | "artists" | "roles"

export interface UserLineDashboardProps {
    user: UserType
    page: UserLinePageType
    setLoading: Dispatch<SetStateAction<boolean>>
    allUsers?: UserType[]
}
