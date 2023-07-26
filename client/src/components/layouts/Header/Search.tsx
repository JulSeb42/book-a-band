/*=============================================== Search ===============================================*/

import { useRef, useState } from "react"
import type { FormEvent } from "react"
import {
    useLocation,
    useSearchParams,
    useNavigate,
    createSearchParams,
} from "react-router-dom"

import { Input } from "components"
import { useKeyPress, useQueryParams } from "hooks"
import { PATHS } from "data"
import { filterObject } from "utils"

import { SearchForm } from "components/layouts/Header/styles"

export const Search = () => {
    const location = useLocation().pathname
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    const [search, setSearch] = useState(query)

    const params = useQueryParams()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const filteredParams: any = filterObject(
            {
                ...params,
                query: search !== "" ? search : null,
                page: null,
            },
            ([_, v]) => v !== null
        )

        if (location === PATHS.ARTISTS) {
            setSearchParams(filteredParams)
        } else {
            navigate({
                pathname: PATHS.ARTISTS,
                search: createSearchParams(filteredParams).toString(),
            })
        }
    }

    const el = useRef<HTMLInputElement>()
    const keys = ["Command", "KeyK"]
    useKeyPress(() => el.current!.focus(), keys)

    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                icon="search"
                placeholder="Search city, genre or name..."
                // @ts-ignore
                ref={el}
                keys={keys}
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </SearchForm>
    )
}
