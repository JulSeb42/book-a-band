/*=============================================== HomeSearch ===============================================*/

import { useState, type FormEvent } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import styled from "styled-components"
import { slugify } from "ts-utils-julseb"

import {
    Select,
    Button,
    COLORS,
    SPACERS,
    RADIUSES,
    Mixins,
    BREAKPOINTS,
} from "components"
import { PATHS } from "data"
import { useQueryParams, useCitiesGenres } from "hooks"
import { filterObject } from "utils"

export const HomeSearch = () => {
    const navigate = useNavigate()

    const { cities, genres, loading } = useCitiesGenres()

    const [city, setCity] = useState("All")
    const [genre, setGenre] = useState("All")

    const params = useQueryParams()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const filteredParams: any = filterObject(
            {
                ...params,
                city: city === "All" ? null : slugify(city),
                genre: genre === "All" ? null : slugify(genre),
            },
            // @ts-expect-error: fix iterator error
            ([_, v]) => v !== null
        )

        if (city === "All" && genre === "All") navigate(PATHS.ARTISTS)

        navigate({
            pathname: PATHS.ARTISTS,
            search: createSearchParams(filteredParams).toString(),
        })
    }

    return (
        <Search onSubmit={handleSubmit}>
            <Select
                label="City"
                options={loading ? [] : cities}
                value={city}
                setValue={setCity}
                isLoading={loading}
            />

            <Select
                label="Genre"
                options={loading ? [] : genres}
                value={genre}
                setValue={setGenre}
                isLoading={loading}
            />

            <Button type="submit" size="small" isLoading={loading}>
                Search
            </Button>
        </Search>
    )
}

const Search = styled.form`
    width: 90%;
    max-width: calc(600px + ${SPACERS.S} * 2);
    background-color: ${COLORS.WHITE};
    border-radius: ${RADIUSES.M};
    padding: ${SPACERS.S};
    ${Mixins.Flexbox({
        alignItems: "flex-end",
        gap: "xs",
    })}

    @media ${BREAKPOINTS.MOBILE} {
        flex-direction: column;
        align-items: stretch;
    }
`
