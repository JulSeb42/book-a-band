/*=============================================== App ===============================================*/

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { GlobalStyle } from "components"
import { routes } from "routes"

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={createBrowserRouter(routes)} />
        </>
    )
}
