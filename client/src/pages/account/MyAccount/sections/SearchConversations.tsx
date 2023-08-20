/*=============================================== SearchConversations ===============================================*/

import type { ChangeEvent, Dispatch, SetStateAction } from "react"
import { useSearchParams } from "react-router-dom"

import { Input, Select, Flexbox } from "components"

interface SearchConversationsProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    read: string
    setRead: Dispatch<SetStateAction<string>>
}

export function SearchConversations({
    search,
    setSearch,
    read,
    setRead,
}: SearchConversationsProps) {
    // TODO: add filters => active, archived
    const [_, setSearchParams] = useSearchParams()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setSearchParams()
    }
    const handleClear = () => {
        setSearch("")
        setSearchParams()
    }

    const statuses: string[] = ["all", "unread", "read"]

    return (
        <Flexbox gap="xs">
            <Input
                id="search"
                label="Search in conversations"
                value={search}
                onChange={handleSearch}
                type="search"
                clear={handleClear}
            />

            <Select
                label="Filter by status"
                options={statuses}
                value={read}
                setValue={setRead}
            />
        </Flexbox>
    )
}
