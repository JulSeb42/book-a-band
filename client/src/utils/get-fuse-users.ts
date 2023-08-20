/*=============================================== Get Fuse users ===============================================*/

import Fuse from "fuse.js"

import type { UserType } from "types"

export const getFuseUsers = (
    users: UserType[],
    search: string,
    keys?: string[]
) => {
    const fuse = new Fuse(users, {
        keys,
    })
    return fuse.search(search).map(option => option.item)
}
