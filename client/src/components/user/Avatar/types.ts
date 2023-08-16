/*=============================================== Avatar types ===============================================*/

import type { UserType } from "types"

export interface AvatarProps {
    user: UserType
    size?: number
    isLoading?: boolean
    isLink?: boolean
}
