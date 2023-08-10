/*=============================================== ProtectedRoute ===============================================*/

import { useContext, type ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"

import { PageLoading } from "components"

import { PATHS } from "data"

interface ProtectedRouteProps {
    children: ReactNode | ReactNode[]
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
