/*=============================================== Routes ===============================================*/

import { createBrowserRouter, Navigate } from "react-router-dom"

import { ProtectedRoute, AnonRoute } from "routes"
import { PATHS } from "data"

import { Homepage } from "pages/Homepage"
import { NotFound } from "pages/NotFound"

import { AllArtists, ArtistDetail } from "pages/artists"

import { Conversation } from "pages/Conversation"

import {
    Signup,
    ThankYou,
    Verify,
    Login,
    ForgotPassword,
    ForgotSent,
    ResetPassword,
    Goodbye,
} from "pages/auth"

import { MyAccount, EditAccount, EditPassword } from "pages/account"

import { Dashboard, DashboardArtists, DashboardRoles } from "pages/dashboard"

// prependImport

type RouteType = {
    path: string
    element: JSX.Element
}

const redirects: RouteType[] = [
    {
        path: PATHS.CONVERSATION().replace(":id", ""),
        element: <Navigate to={PATHS.MY_ACCOUNT} />,
    },
]

export const routes = createBrowserRouter([
    { path: PATHS.ROOT, element: <Homepage /> },
    { path: "*", element: <NotFound /> },

    { path: PATHS.ARTISTS, element: <AllArtists /> },
    { path: PATHS.ARTIST(), element: <ArtistDetail /> },

    {
        path: PATHS.SIGNUP,
        element: (
            <AnonRoute>
                <Signup />
            </AnonRoute>
        ),
    },
    { path: PATHS.THANK_YOU, element: <ThankYou /> },
    { path: PATHS.VERIFY, element: <Verify /> },
    {
        path: PATHS.LOGIN,
        element: (
            <AnonRoute>
                <Login />
            </AnonRoute>
        ),
    },
    {
        path: PATHS.FORGOT_PASSWORD,
        element: (
            <AnonRoute>
                <ForgotPassword />
            </AnonRoute>
        ),
    },
    {
        path: PATHS.FORGOT_PASSWORD_SENT,
        element: (
            <AnonRoute>
                <ForgotSent />
            </AnonRoute>
        ),
    },
    {
        path: PATHS.RESET_PASSWORD,
        element: (
            <AnonRoute>
                <ResetPassword />
            </AnonRoute>
        ),
    },
    {
        path: PATHS.GOODBYE,
        element: (
            <AnonRoute>
                <Goodbye />
            </AnonRoute>
        ),
    },

    {
        path: PATHS.MY_ACCOUNT,
        element: (
            <ProtectedRoute>
                <MyAccount />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.EDIT_ACCOUNT,
        element: (
            <ProtectedRoute>
                <EditAccount />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.EDIT_PASSWORD,
        element: (
            <ProtectedRoute>
                <EditPassword />
            </ProtectedRoute>
        ),
    },

    {
        path: PATHS.CONVERSATION(),
        element: (
            <ProtectedRoute>
                <Conversation />
            </ProtectedRoute>
        ),
    },

    {
        path: PATHS.DASHBOARD,
        element: (
            <ProtectedRoute isAdminPage>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.DASHBOARD_ARTISTS,
        element: (
            <ProtectedRoute isAdminPage>
                <DashboardArtists />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.DASHBOARD_ROLES,
        element: (
            <ProtectedRoute isAdminPage>
                <DashboardRoles />
            </ProtectedRoute>
        ),
    },

    // prependRoute

    ...redirects,
])
