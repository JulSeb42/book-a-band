/*=============================================== useFetchUsers ===============================================*/

import { useEffect, useState } from "react"

import { userService } from "api"
import { getFuseUsers } from "utils"

import type { UserRoleType, AdminApproveStatusType, UserType } from "types"

interface useFetchUsersProps {
    role?: UserRoleType | "all" | undefined
    status?: AdminApproveStatusType | "all" | undefined
    search?: string
}

export const useFetchUsers = ({ role, status, search }: useFetchUsersProps) => {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [isChangeLoading, setIsChangeLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<undefined | string>(
        undefined
    )

    useEffect(() => {
        const getUsers = async () =>
            await userService
                .allUsers({ role, status })
                .then(res => {
                    const userData: UserType[] = res.data

                    if (search && search.length) {
                        setUsers(getFuseUsers(userData, search, ["fullName"]))
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

                    if (isChangeLoading) {
                        if (search && search.length) {
                            setUsers(
                                getFuseUsers(userData, search, ["fullName"])
                            )
                            setIsChangeLoading(false)
                        } else {
                            setUsers(
                                userData
                                    .sort((a, b) => {
                                        return a.createdAt > b.createdAt
                                            ? -1
                                            : 0
                                    })
                                    .sort(user =>
                                        user.role === "admin" ? -1 : 0
                                    )
                            )
                            setIsChangeLoading(false)
                        }
                    }
                })
                .catch(err => setErrorMessage(err.response.data.message))

        getUsers()
    }, [role, search, status, isChangeLoading])

    return {
        users,
        loading,
        errorMessage,
        isChangeLoading,
        setIsChangeLoading,
    }
}
