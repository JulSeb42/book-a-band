/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"

import { App } from "./App.tsx"
import { AuthProviderWrapper } from "context/index.ts"

import "styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProviderWrapper>
        <App />
    </AuthProviderWrapper>
)
