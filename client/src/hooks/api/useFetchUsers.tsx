/*=============================================== useFetchUsers ===============================================*/

import { useEffect, useState } from "react"
import Fuse from "fuse.js"

import { userService } from "api"

import type { UserRoleType, AdminApproveStatusType, UserType } from "types"

interface useFetchUsersProps {
    role?: UserRoleType | "all" | undefined
    isApproved?: AdminApproveStatusType | undefined
    search?: string
}

export const useFetchUsers = ({
    role,
    isApproved,
    search,
}: useFetchUsersProps) => {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    )

    useEffect(() => {
        const getUsers = async () =>
            await userService
                .allUsers({ role, isApproved })
                .then(res => {
                    const userData: UserType[] = res.data

                    if (search && search.length) {
                        const fuse = new Fuse(userData, {
                            keys: ["fullName"],
                        })
                        setUsers(fuse.search(search).map(option => option.item))
                        setLoading(false)
                    } else {
                        setUsers(
                            userData
                                .sort((a, b) => {
                                    return a.createdAt > b.createdAt ? -1 : 0
                                })
                                .sort(user => (user.role === "admin" ? -1 : 0))
                        )
                        setLoading(false)
                    }
                })
                .catch(err => setErrorMessage(err.response.data.message))

        getUsers()
    }, [role, search, isApproved])

    return {
        users,
        loading,
        errorMessage,
    }
}
