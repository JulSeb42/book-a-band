/*=============================================== AnonRoute ===============================================*/

import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { PATHS } from "data"

interface AnonRouteProps {
    children: any
    redirectTo?: string
}

export const AnonRoute = ({
    children,
    redirectTo = PATHS.MY_ACCOUNT,
}: AnonRouteProps) => {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as AuthContextType

    return isLoading ? (
        <p>Loading...</p>
    ) : !isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}
