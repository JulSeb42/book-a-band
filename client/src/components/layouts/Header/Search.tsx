/*=============================================== Search ===============================================*/

import { useState } from "react"
import type { FormEvent } from "react"
import {
    useLocation,
    useSearchParams,
    createSearchParams,
    useNavigate,
} from "react-router-dom"
import { Input } from "tsx-library-julseb"

import { PATHS } from "data"

import { SearchForm } from "components/layouts/Header/styles"

export const Search = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname

    const [searchParams, setSearchParams] = useSearchParams()
    const city: string | null = searchParams.get("city") || null
    const genre: string | null = searchParams.get("genre") || null
    const query: string | null = searchParams.get("query") || null

    const [search, setSearch] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (location === PATHS.ARTISTS) {
        } else
            navigate({
                pathname: PATHS.ARTISTS,
                search: createSearchParams({
                    query: search,
                }).toString(),
            })

        setSearch("")
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                icon="search"
                placeholder="Search by city, genre, or name..."
                type="search"
                clearSearch={() => setSearch("")}
                focusKeys={["Command", "KeyK"]}
                showKeys
                onChange={e => setSearch(e.target.value)}
            />
        </SearchForm>
    )
}
