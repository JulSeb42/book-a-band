/*=============================================== ArtistsFilters ===============================================*/

import { useSearchParams } from "react-router-dom"

import { Flexbox, Text, Selector } from "components"
import { useQueryParams } from "hooks"

import type { SortType } from "types"

export const ArtistsFilters = () => {
    const { sort, ...params } = useQueryParams()

    const [_, setSearchParams] = useSearchParams()

    const handleChange = (sort: SortType) =>
        setSearchParams({
            ...params,
            sort,
        })

    return (
        <>
            <Flexbox flexDirection="column" alignItems="stretch" gap="xs">
                <Text tag="h5">Sort by</Text>

                <Flexbox gap="xs" flexWrap="wrap">
                    <Selector
                        id="sortPrice"
                        label="Price"
                        type="radio"
                        name="sort"
                        defaultChecked={sort === "price"}
                        onChange={() => handleChange("price")}
                    />

                    <Selector
                        id="sortAvailability"
                        label="Availability"
                        type="radio"
                        name="sort"
                        defaultChecked={sort === "availability"}
                        onChange={() => handleChange("availability")}
                    />
                </Flexbox>
            </Flexbox>
        </>
    )
}
