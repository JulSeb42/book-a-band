/*=============================================== SearchDashboard types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

export interface SearchDashboardProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    setLoading: Dispatch<SetStateAction<boolean>>
}
