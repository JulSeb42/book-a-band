/*=============================================== HomeSearch ===============================================*/

import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import styled from "styled-components"
import {
    useFetch,
    ThemeLight,
    Select,
    Button,
    Text,
    Radiuses,
    Spacers,
    Shadows,
    slugify,
    Skeleton,
} from "tsx-library-julseb"
import type { AxiosResponse } from "axios"

import { userService } from "api"

import { InputSkeleton } from "components"

export const HomeSearch = () => {
    const navigate = useNavigate()

    const {
        response: citiesResponse,
        error: citiesError,
        loading: citiesLoading,
    } = useFetch<AxiosResponse>(userService.allCities())
    const cities: string[] = citiesResponse?.data

    const {
        response: genresResponse,
        error: genresError,
        loading: genresLoading,
    } = useFetch<AxiosResponse>(userService.allGenres())
    const genres: string[] = genresResponse?.data

    const [city, setCity] = useState("All")
    const [genre, setGenre] = useState("All")

    if (citiesLoading || genresLoading) return <HomeSearchSkeleton />

    if (citiesError || genresError)
        return (
            <Text>Error while fetching data: {citiesError || genresError}</Text>
        )

    const allCities = cities ? ["All", ...cities] : ["All"]
    const allGenres = genres ? ["All", ...genres] : ["All"]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (city === "All" && genre === "All") navigate("/artists")

        if (city !== "All" && genre === "All")
            navigate({
                pathname: "/artists",
                search: createSearchParams({
                    city: slugify(city),
                }).toString(),
            })

        if (city === "All" && genre !== "All")
            navigate({
                pathname: "/artists",
                search: createSearchParams({
                    genre: slugify(genre),
                }).toString(),
            })

        if (city !== "All" && genre !== "All")
            navigate({
                pathname: "/artists",
                search: createSearchParams({
                    city: slugify(city),
                    genre: slugify(genre),
                }).toString(),
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Select
                label="City"
                selected={city}
                setSelected={setCity}
                items={allCities}
            />

            <Select
                label="Genre"
                selected={genre}
                setSelected={setGenre}
                items={allGenres}
            />

            <Button type="submit" size="small">
                Search
            </Button>
        </Form>
    )
}

const Form = styled.form`
    background-color: ${ThemeLight.White};
    width: 100%;
    max-width: calc(600px + ${Spacers.S});
    padding: ${Spacers.S};
    text-align: left;
    border-radius: ${Radiuses.M};
    box-shadow: ${Shadows.M};
    display: grid;
    grid-template-columns: 1fr 1fr 62px;
    align-items: end;
    gap: ${Spacers.S};
`

const HomeSearchSkeleton = () => {
    return (
        <Form as="div">
            <InputSkeleton label="City" />
            <InputSkeleton label="Genre" />
            <Skeleton
                width={62}
                height={31}
                borderRadius="m"
                animation="shine"
            />
        </Form>
    )
}
