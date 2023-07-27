/*=============================================== Get min and max prices ===============================================*/

import type { UserType } from "types"

export const getMinMaxPrices = (artists: UserType[]) => {
    const sortedArtists = artists.sort(
        (a, b) => (a.price || 0) - (b.price || 0)
    )
    const minPrice = sortedArtists[0].price
    const maxPrice = sortedArtists[sortedArtists.length - 1].price

    return {
        minPrice,
        maxPrice,
    }
}
