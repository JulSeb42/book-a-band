/*=============================================== ArtistLineApprove types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import type { UserType } from "types"

export interface ArtistLineApproveProps {
    artist: UserType
    isChangeLoading: boolean
    setIsChangeLoading: Dispatch<SetStateAction<boolean>>
}
