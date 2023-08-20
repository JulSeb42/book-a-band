/*=============================================== App ===============================================*/

import { Fragment } from "react"
import { RouterProvider } from "react-router-dom"

import { GlobalStyle, PageLoading, Toaster } from "components"
import { routes } from "routes"

export function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <RouterProvider router={routes} fallbackElement={<PageLoading />} />
            <Toaster />
        </Fragment>
    )
}
