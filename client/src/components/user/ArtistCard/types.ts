/*=============================================== ArtistCard types ===============================================*/

import type { UserType } from "types"

export interface ArtistCardProps {
    artist: UserType
}

export type ArtistInfoType = {
    id: number
    title: string
    value: string
}
