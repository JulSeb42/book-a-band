/*=============================================== Login ===============================================*/

import { Link } from "react-router-dom"

import { Page, Text } from "components"
import { LoginForm } from "pages/auth/Login/LoginForm"
import { PATHS } from "data"

export const Login = () => {
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
        </Page>
    )
}
