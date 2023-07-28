/*=============================================== ProtectedRoute ===============================================*/

import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { PageLoading } from "components"

import { PATHS } from "data"

interface ProtectedRouteProps {
    children: any
    redirectTo?: string
}

export const ProtectedRoute = ({
    children,
    redirectTo = PATHS.LOGIN,
}: ProtectedRouteProps) => {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as AuthContextType

    return isLoading ? (
        <PageLoading />
    ) : isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}
