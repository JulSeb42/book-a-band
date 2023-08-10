/*=============================================== ProtectedRoute ===============================================*/

import { useContext, type ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"

import { PageLoading } from "components"

import { PATHS } from "data"

interface ProtectedRouteProps {
    children: ReactNode | ReactNode[]
    redirectTo?: string
    isAdminPage?: boolean
}

export const ProtectedRoute = ({
    children,
    redirectTo = PATHS.LOGIN,
    isAdminPage,
}: ProtectedRouteProps) => {
    const { isLoggedIn, isLoading, user } = useContext(
        AuthContext
    ) as AuthContextType

    return isLoading ? (
        <PageLoading />
    ) : isLoggedIn ? (
        isAdminPage ? (
            user?.role === "admin" ? (
                children
            ) : (
                <Navigate to={redirectTo} />
            )
        ) : (
            children
        )
    ) : (
        <Navigate to={redirectTo} />
    )
}
