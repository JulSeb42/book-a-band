/*=============================================== List ===============================================*/

import { Fragment, type Dispatch, type SetStateAction } from "react"

import { Text, ArtistLineApprove, Pagination, Hr } from "components"
import { usePaginatedData } from "hooks"

import type { UserType } from "types"

interface ListProps {
    artists: UserType[]
    isLoading: boolean
    errorMessage: string | undefined
    isChangeLoading: boolean
    setIsChangeLoading: Dispatch<SetStateAction<boolean>>
}

export const List = ({
    artists,
    isLoading,
    errorMessage,
    isChangeLoading,
    setIsChangeLoading,
}: ListProps) => {
    const { paginatedData, totalPages } = usePaginatedData(artists, 50)

    if (isLoading) return null // TODO: add skeleton

    if (errorMessage)
        return <Text>Error while fetching artists: {errorMessage}</Text>

    if (!paginatedData.length) return <Text>No result.</Text>

    return (
        <>
            {paginatedData.map((artist, i) => (
                <Fragment key={artist._id}>
                    <ArtistLineApprove
                        artist={artist}
                        isChangeLoading={isChangeLoading}
                        setIsChangeLoading={setIsChangeLoading}
                    />

                    {i !== paginatedData.length - 1 && <Hr />}
                </Fragment>
            ))}

            <Pagination totalPages={totalPages} />
        </>
    )
}
