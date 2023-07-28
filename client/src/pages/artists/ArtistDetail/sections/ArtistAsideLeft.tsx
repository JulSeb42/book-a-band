/*=============================================== ArtistAsideLeft ===============================================*/

import { Aside, Avatar } from "components"

import type { ArtistSectionProps } from "pages/artists/ArtistDetail/sections/types"

export const ArtistAsideLeft = ({ artist, isLoading }: ArtistSectionProps) => {
    return (
        <Aside center>
            <Avatar
                src={artist?.avatar!}
                isLoading={isLoading}
                size={150}
                username={artist?.fullName}
            />
        </Aside>
    )
}
