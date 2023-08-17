/*=============================================== List ===============================================*/

import { Fragment, type Dispatch, type SetStateAction } from "react"
import { generateNumbers } from "ts-utils-julseb"
import styled from "styled-components"

import {
    Text,
    UserLineDashboard,
    Pagination,
    Hr,
    SkeletonCard,
    Skeleton,
} from "components"
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

export function List({
    users,
    loading,
    setLoading,
    errorMessage,
    page,
}: UsersListDashboardProps) {
    const { paginatedData, totalPages } = usePaginatedData(users, 50)

    if (loading) return <ListSkeleton />

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

function ListSkeleton() {
    const arr = generateNumbers(0, 4)

    return (
        <>
            {arr.map((n, i) => (
                <Fragment key={n}>
                    <SkeletonCard gap="xs" isShining>
                        <Skeleton
                            width={32}
                            height={32}
                            borderRadius="circle"
                        />

                        <StyledSkeletonCard flexDirection="column" gap="xxs">
                            <Skeleton width="70%" height={20} />
                            <Skeleton width="40%" height={16} />
                        </StyledSkeletonCard>
                    </SkeletonCard>

                    {i !== arr.length - 1 && <Hr />}
                </Fragment>
            ))}
        </>
    )
}

const StyledSkeletonCard = styled(SkeletonCard)`
    width: 100%;
`
