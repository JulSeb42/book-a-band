/*=============================================== ArtistsList ===============================================*/

import { useState, useEffect, Fragment } from "react"

import { userService } from "api"

import { Text, UserLine, Hr, Flexbox } from "components"
import { useAdminParams } from "hooks"

import type { UserType } from "types"

interface UsersListProps {}

export const UsersList = ({}: UsersListProps) => {
    const { role, isApproved } = useAdminParams()

    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    )

    useEffect(() => {
        userService
            .allUsers({ role, isApproved })
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch(err => setErrorMessage(err.response.data.message))
    }, [role, isApproved])

    if (loading) return null // TODO: Add skeleton

    if (errorMessage)
        return <Text>Error while fetching users: {errorMessage}</Text>

    return (
        <Flexbox flexDirection="column" gap="s">
            {users.map((user, i) => (
                <Fragment key={user._id}>
                    <UserLine user={user} />

                    {i !== users.length - 1 && <Hr />}
                </Fragment>
            ))}
        </Flexbox>
    )
}
