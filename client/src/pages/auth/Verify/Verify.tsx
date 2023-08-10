/*=============================================== Verify ===============================================*/

import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { AxiosError } from "axios"

import { AuthContext, type AuthContextType } from "context"
import { authService } from "api"

import {
    VerifySkeleton,
    NotLoggedIn,
    VerificationFailed,
    VerificationSuccess,
} from "pages/auth/Verify/sections"

export const Verify = () => {
    const { token, id } = useParams<{ token: string; id: string }>()

    const { user, setUser, isLoggedIn, setToken } = useContext(
        AuthContext
    ) as AuthContextType

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<
        AxiosError | undefined | string
    >(undefined)

    useEffect(() => {
        if (isLoading && user) {
            if (!isLoggedIn) {
                setIsLoading(false)
            } else if (!id || id !== user._id) {
                setErrorMessage("User ID does not match.")
                setIsLoading(false)
            } else if (token !== user.verifyToken) {
                setErrorMessage("User token does not match.")
                setIsLoading(false)
            } else {
                authService
                    .verify({ id })
                    .then(res => {
                        setUser(res.data.user)
                        setToken(res.data.authToken)
                        setIsLoading(false)
                    })
                    .catch(err => {
                        setErrorMessage(err)
                        setIsLoading(false)
                    })
            }
        }
    }, [isLoggedIn, user, isLoading, id, token, setToken, setUser])

    if (isLoading) return <VerifySkeleton />

    if (!isLoggedIn) return <NotLoggedIn />

    if (errorMessage) return <VerificationFailed error={errorMessage} />

    return <VerificationSuccess />
}
