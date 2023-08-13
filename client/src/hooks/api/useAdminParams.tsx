/*=============================================== useAdminParams ===============================================*/

import { useSearchParams } from "react-router-dom"

import type { UserRoleType, AdminApproveStatusType } from "types"

export const useAdminParams = () => {
    const [searchParams] = useSearchParams()
    const role = searchParams.get("role") as UserRoleType
    const status = searchParams.get("status") as AdminApproveStatusType

    return { role, status }
}
