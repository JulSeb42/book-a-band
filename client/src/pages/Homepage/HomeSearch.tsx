/*=============================================== HomeSearch ===============================================*/

import { useState, useEffect } from "react"
import type { FormEvent } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import styled from "styled-components"
import { slugify } from "ts-utils-julseb"

import { userService } from "api"

import { Select, Button, COLORS, SPACERS, RADIUSES, Mixins } from "components"
import { PATHS } from "data"
import { filterObject } from "utils"

export const HomeSearch = () => {
    const navigate = useNavigate()

    const [cities, setCities] = useState<string[]>([])
    const [genres, setGenres] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userService.allCities().then(res => setCities(res.data))
        userService.allGenres().then(res => setGenres(res.data))
        setIsLoading(false)
    }, [])

    const [city, setCity] = useState("All")
    const [genre, setGenre] = useState("All")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const params = {
            city: city === "All" ? null : slugify(city),
            genre: genre === "All" ? null : slugify(genre),
        }

        const filteredParams: any = filterObject(params, ([_, v]) => v !== null)

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
                options={isLoading ? [] : ["All", ...cities]}
                value={city}
                setValue={setCity}
            />

            <Select
                label="Genre"
                options={isLoading ? [] : ["All", ...genres]}
                value={genre}
                setValue={setGenre}
            />

            <Button type="submit" size="small">
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
`
