/*=============================================== App ===============================================*/

import { RouterProvider } from "react-router-dom"

import { GlobalStyle, PageLoading, Toaster } from "components"
import { routes } from "routes"

export function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={routes} fallbackElement={<PageLoading />} />
            <Toaster />
        </>
    )
}
