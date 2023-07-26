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
import { useKeyPress } from "hooks"
import { PATHS } from "data"
import { filterObject } from "utils"

import { SearchForm } from "components/layouts/Header/styles"

export const Search = () => {
    const location = useLocation().pathname
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()
    const page: string | undefined = searchParams.get("page") || undefined
    const city: string | undefined = searchParams.get("city") || undefined
    const genre: string | undefined = searchParams.get("genre") || undefined

    const el = useRef<HTMLInputElement>()
    const keys = ["Command", "KeyK"]

    useKeyPress(() => el.current!.focus(), keys)

    const [search, setSearch] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const params = {
            page: page || null,
            city: city || null,
            genre: genre || null,
            query: search !== "" ? search : null,
        }
        // Using any to be able to use filtered params
        const filteredParams: any = filterObject(params, ([_, v]) => v !== null)

        if (location === PATHS.ARTISTS) {
            setSearchParams(filteredParams)
        } else {
            navigate({
                pathname: PATHS.ARTISTS,
                search: createSearchParams(filteredParams).toString(),
            })
        }
    }

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
