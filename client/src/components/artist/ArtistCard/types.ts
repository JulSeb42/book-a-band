/*=============================================== ArtistCard types ===============================================*/

import type { UserType } from "types"

export interface ArtistCardProps {
    artist: UserType
}

export type ArtistInfoType = {
    title: string
    value: string
}
