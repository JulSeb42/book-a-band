/*=============================================== useFetchUser ===============================================*/

import { useState, useEffect } from "react"

import { userService } from "api"

import type { UserType, ServerErrorType } from "types"

export const useFetchUser = (id: string) => {
    const [user, setUser] = useState<UserType>()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<ServerErrorType>(undefined)

    useEffect(() => {
        const getData = async () =>
            await userService
                .getUser(id)
                .then(res => {
                    setUser(res.data)
                    setLoading(false)
                })
                .catch(err => setErrorMessage(err))

        if (loading) getData()
    }, [id, loading])

    return { user, loading, errorMessage }
}
