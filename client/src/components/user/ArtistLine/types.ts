/*=============================================== ArtistLine types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import type { UserType } from "types"

export interface ArtistLineProps {
    artist: UserType
    isButtonLoading: boolean
    setIsButtonLoading: Dispatch<SetStateAction<boolean>>
}
