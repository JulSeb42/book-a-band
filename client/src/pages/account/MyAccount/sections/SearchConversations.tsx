/*=============================================== SearchConversations ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import { Input } from "components"

interface SearchConversationsProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

export function SearchConversations({
    search,
    setSearch,
}: SearchConversationsProps) {
    // TODO: add filters => active, archived
    // TODO: only unread
    return (
        <Input
            id="search"
            label="Search in conversations"
            icon="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    )
}
