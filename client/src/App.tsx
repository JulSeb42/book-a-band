/*=============================================== App ===============================================*/

import { RouterProvider } from "react-router-dom"

import { GlobalStyle, PageLoading } from "components"
import { routes } from "routes"

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={routes} fallbackElement={<PageLoading />} />
        </>
    )
}
