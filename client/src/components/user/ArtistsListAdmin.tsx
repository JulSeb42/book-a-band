/*=============================================== ArtistsListAdmin ===============================================*/

import { Fragment, useState, type Dispatch, type SetStateAction } from "react"
import { useSearchParams } from "react-router-dom"
import Fuse from "fuse.js"

import { ArtistLine, Text, Hr, Pagination, Input } from "components"
import { usePaginatedData } from "hooks"

import type { UserType } from "types"

export const ArtistsListAdmin = ({
    artists,
    isButtonLoading,
    setIsButtonLoading,
}: {
    artists: UserType[]
    isButtonLoading: boolean
    setIsButtonLoading: Dispatch<SetStateAction<boolean>>
}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page")
    const tab = searchParams.get("tab") || "approved"

    const [search, setSearch] = useState("")

    const fuse = new Fuse(artists, {
        keys: ["fullName"],
    })
    const results: UserType[] = fuse.search(search).map(value => value.item)

    const { paginatedData, totalPages } = usePaginatedData<UserType>(
        search ? results : artists,
        50
    )

    return (
        <>
            <Input
                id="search"
                label="Search user"
                value={search}
                onChange={e => {
                    setSearch(e.target.value)
                    if (page && page !== "1")
                        setSearchParams({ tab, page: "1" })
                }}
            />

            {paginatedData.length ? (
                paginatedData.map((artist, i) => (
                    <Fragment key={artist._id}>
                        <ArtistLine
                            artist={artist}
                            isButtonLoading={isButtonLoading}
                            setIsButtonLoading={setIsButtonLoading}
                            key={artist._id}
                        />

                        {i !== artists.length - 1 && <Hr />}
                    </Fragment>
                ))
            ) : (
                <Text>No result.</Text>
            )}

            <Pagination totalPages={totalPages} />
        </>
    )
}
