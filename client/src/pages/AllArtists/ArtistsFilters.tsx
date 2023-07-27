/*=============================================== ArtistsFilters ===============================================*/

import type { ChangeEvent, Dispatch, SetStateAction } from "react"

import styled from "styled-components"

import {
    Button,
    Flexbox,
    Text,
    Selector,
    Grid,
    Input,
    Select,
} from "components"
import { useQueryParams, useCitiesGenres } from "hooks"

import type { SortType, PricesType } from "types"

interface ArtistsFiltersProps {
    isLoading: boolean
    sort: SortType | undefined
    setSort: (sort: SortType | undefined) => void
    prices: PricesType
    setPrices: (prices: PricesType) => void
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
    const { cities, genres, isLoading: isDataLoading } = useCitiesGenres()

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id
        const checked = e.target.checked

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
                                isLoading={isDataLoading}
                            />
                        )}

                        {!genreParam && (
                            <Select
                                label="Genre"
                                value={selectedGenre}
                                setValue={setSelectedGenre}
                                options={genres}
                                isLoading={isDataLoading}
                            />
                        )}
                    </>
                )}
            </Flexbox>

            <StyledButton onClick={handleReset}>Reset filters</StyledButton>
        </>
    )
}

const StyledButton = styled(Button)`
    align-self: flex-start;
`
