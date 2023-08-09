/*=============================================== ArtistsListAdmin ===============================================*/

import { ArtistLine, Text } from "components"

import type { UserType } from "types"

export const ArtistsListAdmin = ({ artists }: { artists: UserType[] }) => {
    if (!artists.length) return <Text>No result.</Text>

    return (
        <>
            {artists?.map(artist => (
                <ArtistLine artist={artist} key={artist._id} />
            ))}
        </>
    )
}
