/*=============================================== Filter artists by prices ===============================================*/

import type { UserType, PricesType } from "types"

export const filterByPrice = (artists: UserType[], prices: PricesType) =>
    artists?.filter(
        artist =>
            artist.price >= (prices.minPrice || 0) &&
            artist.price <= (prices.maxPrice || 100000)
    )
