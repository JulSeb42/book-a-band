/*=============================================== Signup ===============================================*/

import { useSearchParams, Link } from "react-router-dom"

import { Page, Text } from "components"
import { SignupNav } from "pages/auth/Signup/SignupNav"
import { SignupForm } from "pages/auth/Signup/SignupForm"
import { NotFound } from "pages/NotFound"
import { PATHS } from "data"

import type { UserRoleType } from "types"

export function Signup() {
    const [searchParams] = useSearchParams()
    const role = (searchParams.get("role") || "user") as UserRoleType

    const roles: UserRoleType[] = ["admin", "artist", "user"]

    if (!roles.find(v => v === role)) return <NotFound />

    return (
        <Page title="Create an account" mainSize="form">
            <SignupNav />

            <Text tag="h1">Signup as {role}</Text>

            <SignupForm />

            <Text>
                You already have an account?{" "}
                <Link to={PATHS.LOGIN}>Log in.</Link>
            </Text>
        </Page>
    )
}
