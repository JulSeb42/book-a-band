/*=============================================== Fetch users ===============================================*/

import type { UserRoleType, SortType } from "types"

export type FetchUsersType = {
    role?: UserRoleType | "undefined"
    status?: "approved" | "rejected" | "pending" | "undefined"
    city?: string
    genre?: string
    query?: string
    sort?: SortType | "undefined"
    verified?: "true" | "false" | "undefined"
}
