/*=============================================== Types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import type { UserType } from "types"

export interface DashboardSectionProps {
    user: UserType
    allUsers?: UserType[]
    setLoading: Dispatch<SetStateAction<boolean>>
}
