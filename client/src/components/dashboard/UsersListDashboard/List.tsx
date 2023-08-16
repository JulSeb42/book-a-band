/*=============================================== List ===============================================*/

import { Fragment, type Dispatch, type SetStateAction } from "react"

import { Text, UserLineDashboard, Pagination, Hr } from "components"
import { usePaginatedData } from "hooks"

import type { UserType } from "types"
import type { UserLinePageType } from "components/dashboard/UserLineDashboard/types"

interface UsersListDashboardProps {
    users: UserType[]
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    errorMessage: string | undefined
    page: UserLinePageType
}

export const List = ({
    users,
    loading,
    setLoading,
    errorMessage,
    page,
}: UsersListDashboardProps) => {
    const { paginatedData, totalPages } = usePaginatedData(users, 50)

    if (loading) return <Text>Loading</Text> // TODO: Add skeleton

    if (errorMessage)
        return <Text>Error while fetching messages: {errorMessage}</Text>

    if (!paginatedData.length) return <Text>No result.</Text>

    return (
        <>
            {paginatedData.map((user, i) => (
                <Fragment key={user._id}>
                    <UserLineDashboard
                        user={user}
                        page={page}
                        setLoading={setLoading}
                        allUsers={users}
                    />

                    {i !== paginatedData.length - 1 && <Hr />}
                </Fragment>
            ))}

            <Pagination totalPages={totalPages} />
        </>
    )
}
