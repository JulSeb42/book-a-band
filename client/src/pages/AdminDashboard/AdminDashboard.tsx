/*=============================================== AdminDashboard ===============================================*/

import { useContext } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { userService } from "api"

import { Page } from "components"
import { NotFound } from "pages/NotFound"
import { useFetch } from "hooks"

export const AdminDashboard = () => {
    const { user } = useContext(AuthContext) as AuthContextType

    if (user?.role !== "admin") return <NotFound />

    return <Page title="Dashboard"></Page>
}
