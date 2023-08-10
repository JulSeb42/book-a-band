/*=============================================== AnonRoute ===============================================*/

import { useContext, type ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"

import { PageLoading } from "components"

import { PATHS } from "data"

interface AnonRouteProps {
    children: ReactNode | ReactNode[]
    redirectTo?: string
}

export const AnonRoute = ({
    children,
    redirectTo = PATHS.MY_ACCOUNT,
}: AnonRouteProps) => {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as AuthContextType

    return isLoading ? (
        <PageLoading />
    ) : !isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}
