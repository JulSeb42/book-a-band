/*=============================================== ArtistAsideLeft ===============================================*/

import { Aside, Avatar } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export function ArtistAsideLeft({ artist, isLoading }: ArtistSectionProps) {
    return (
        <Aside center>
            <Avatar user={artist} isLoading={isLoading} size={150} />
        </Aside>
    )
}
