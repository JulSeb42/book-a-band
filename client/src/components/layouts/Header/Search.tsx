/*=============================================== Search ===============================================*/

import { useRef, useState, type FormEvent } from "react"
import {
    useLocation,
    useSearchParams,
    useNavigate,
    createSearchParams,
} from "react-router-dom"

import { Input } from "components"
import { useKeyPress, useQueryParams } from "hooks"
import { PATHS } from "data"

import { SearchForm } from "components/layouts/Header/styles"

export function Search() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const [_, setSearchParams] = useSearchParams()
    const { query } = useQueryParams()

    const [search, setSearch] = useState(query || "")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (search !== "") {
            if (pathname === PATHS.ARTISTS) setSearchParams({ query: search })
            else
                navigate({
                    pathname: PATHS.ARTISTS,
                    search: createSearchParams({ query: search }).toString(),
                })
        } else {
            if (pathname === PATHS.ARTISTS) setSearchParams({})
            else navigate(PATHS.ARTISTS)
        }
    }

    const el = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
    const keys = ["Command", "KeyK"]
    useKeyPress(() => el.current!.focus(), keys)

    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                icon="search"
                placeholder="Search city, genre or name..."
                ref={el}
                keys={keys}
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </SearchForm>
    )
}
