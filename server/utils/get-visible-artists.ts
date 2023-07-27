/*=============================================== Get visible artists ===============================================*/

import type { UserType } from "../types"

export const getVisibleArtists = (users: UserType[]) =>
    users?.filter(user => user.role === "artist" && user.isVisible)
