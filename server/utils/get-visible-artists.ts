/*=============================================== Get visible artists ===============================================*/

import type { UserType } from "../types"

export const visibleArtists: Partial<UserType> = {
    role: "artist",
    isVisible: true,
    isApproved: true,
}
