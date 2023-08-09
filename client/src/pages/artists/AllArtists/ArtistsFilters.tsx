/*=============================================== ArtistsFilters ===============================================*/

import {
    useState,
    type ChangeEvent,
    type Dispatch,
    type SetStateAction,
} from "react"

import {
    Button,
    Flexbox,
    Text,
    Selector,
    Grid,
    Input,
    Select,
} from "components"
import { useQueryParams, useCitiesGenres, useMaxWidth } from "hooks"

import type { SortType, PricesType } from "types"

interface ArtistsFiltersProps {
    isLoading: boolean
    sort: SortType | undefined
    setSort: Dispatch<SetStateAction<SortType | undefined>>
    prices: PricesType
    setPrices: Dispatch<SetStateAction<PricesType>>
    selectedCity: string
    setSelectedCity: Dispatch<SetStateAction<string>>
    selectedGenre: string
    setSelectedGenre: Dispatch<SetStateAction<string>>
}

export const ArtistsFilters = ({
    sort,
    setSort,
    prices,
    setPrices,
    selectedCity,
    setSelectedCity,
    selectedGenre,
    setSelectedGenre,
    isLoading,
}: ArtistsFiltersProps) => {
    const { city: cityParam, genre: genreParam } = useQueryParams()
    const { cities, genres, loading } = useCitiesGenres()

    const [isOpen, setIsOpen] = useState(false)
    const isTablet = useMaxWidth(1024)

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target

        if (id === "price" && checked) setSort("price")
        if (id === "availability" && checked) setSort("availability")
    }

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) =>
        setPrices({
            ...prices,
            [e.target.id]: e.target.value,
        })

    const handleReset = () => {
        setSort(undefined)
        setPrices({
            ...prices,
            minPrice: prices.globalMinPrice,
            maxPrice: prices.globalMaxPrice,
        })
        setSelectedCity("All")
        setSelectedGenre("All")
    }

    if (!isOpen && isTablet)
        return (
            <Flexbox flexDirection="column" alignItems="stretch" gap="xs">
                <Text tag="h5">Filters</Text>

                <Button
                    alignSelf="flex-start"
                    variant="transparent"
                    noPadding
                    onClick={() => setIsOpen(true)}
                >
                    Open filters
                </Button>
            </Flexbox>
        )

    return (
        <>
            <Flexbox flexDirection="column" gap="xs">
                <Text tag="h5">Sort by</Text>

                <Flexbox gap="xs" flexWrap="wrap">
                    <Selector
                        id="price"
                        label="Price"
                        name="sort"
                        checked={sort === "price"}
                        onChange={handleCheck}
                    />

                    <Selector
                        id="availability"
                        label="Availability"
                        name="sort"
                        checked={sort === "availability"}
                        onChange={handleCheck}
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="xs">
                <Text tag="h5">Filters</Text>

                <Grid col={2} gap="xs">
                    <Input
                        id="minPrice"
                        type="number"
                        label="Min price"
                        value={prices.minPrice}
                        onChange={handlePrice}
                        min={prices.globalMinPrice}
                        max={prices.globalMaxPrice}
                        step={100}
                        isLoading={isLoading}
                    />

                    <Input
                        id="maxPrice"
                        type="number"
                        label="Max price"
                        value={prices.maxPrice}
                        onChange={handlePrice}
                        min={prices.globalMinPrice}
                        max={prices.globalMaxPrice}
                        step={100}
                        isLoading={isLoading}
                    />
                </Grid>

                {(!cityParam || !genreParam) && (
                    <>
                        {!cityParam && (
                            <Select
                                label="City"
                                value={selectedCity}
                                setValue={setSelectedCity}
                                options={cities}
                                isLoading={loading}
                            />
                        )}

                        {!genreParam && (
                            <Select
                                label="Genre"
                                value={selectedGenre}
                                setValue={setSelectedGenre}
                                options={genres}
                                isLoading={loading}
                            />
                        )}
                    </>
                )}
            </Flexbox>

            <Flexbox gap="xs">
                <Button onClick={handleReset}>Reset filters</Button>

                {isTablet && (
                    <Button
                        variant="transparent"
                        onClick={() => setIsOpen(false)}
                    >
                        Close filters
                    </Button>
                )}
            </Flexbox>
        </>
    )
}
