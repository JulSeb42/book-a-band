/*=============================================== Login ===============================================*/

import { Link } from "react-router-dom"

import { Page, Text } from "components"
import { LoginForm } from "pages/auth/Login/LoginForm"
import { LoginDemo } from "pages/auth/Login/LoginDemo"
import { PATHS } from "data"

export function Login() {
    return (
        <Page title="Login" mainSize="form">
            <Text tag="h1">Log in</Text>

            <LoginForm />

            <Text>
                <Link to={PATHS.FORGOT_PASSWORD}>I forgot my password.</Link>
            </Text>

            <Text>
                You don't have an account?{" "}
                <Link to={PATHS.SIGNUP}>Sign up</Link>.
            </Text>

            <LoginDemo />
        </Page>
    )
}
