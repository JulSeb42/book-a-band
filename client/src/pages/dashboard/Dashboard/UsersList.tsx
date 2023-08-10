/*=============================================== UsersList ===============================================*/

import { Fragment } from "react"

import { Text, UserLineContact, Hr, Pagination } from "components"
import { usePaginatedData } from "hooks"

import type { UserType } from "types"

interface UsersListProps {
    users: UserType[]
    isLoading: boolean
    errorMessage: undefined | string
}

export const UsersList = ({
    users,
    isLoading,
    errorMessage,
}: UsersListProps) => {
    const { paginatedData, totalPages } = usePaginatedData<UserType>(users)

    if (isLoading) return null // TODO: Add skeleton

    if (errorMessage)
        return <Text>Error while fetching users: {errorMessage}</Text>

    return (
        <>
            {paginatedData.map((user, i) => (
                <Fragment key={user._id}>
                    <UserLineContact user={user} />

                    {i !== paginatedData.length - 1 && <Hr />}
                </Fragment>
            ))}

            <Pagination totalPages={totalPages} />
        </>
    )
}
