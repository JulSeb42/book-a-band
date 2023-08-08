/*=============================================== Context types ===============================================*/

import type { Dispatch, SetStateAction } from "react"
import type { UserType } from "types"

export type AuthContextType = {
    isLoggedIn: boolean
    isLoading: boolean
    user: UserType | null
    setUser: Dispatch<SetStateAction<UserType | null>>
    loginUser: (token: string) => void
    logoutUser: () => void
    setToken: (token: string) => void
}
