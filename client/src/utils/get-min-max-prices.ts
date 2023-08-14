/*=============================================== Get min and max prices ===============================================*/

import type { UserType } from "types"

export const getMinMaxPrices = (artists: UserType[]) => {
    let minPrice: number = 0,
        maxPrice: number = 0

    let sortedArtists = artists
        .filter(user => user.role === "artist")
        .filter(
            artist =>
                artist.price !== 0 &&
                artist.price !== undefined &&
                artist.price !== null
        )

    if (sortedArtists.length) {
        sortedArtists = sortedArtists.sort((a, b) => a.price - b.price)

        minPrice = sortedArtists[0].price
        maxPrice = sortedArtists[sortedArtists.length - 1].price
    }

    return {
        minPrice,
        maxPrice,
    }
}
