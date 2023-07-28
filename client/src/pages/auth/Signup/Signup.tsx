/*=============================================== Signup ===============================================*/

import { useSearchParams } from "react-router-dom"

import { Page, Text } from "components"
import { SignupNav } from "pages/auth/Signup/SignupNav"
import { SignupForm } from "pages/auth/Signup/SignupForm"

import type { UserRoleType } from "types"

export const Signup = () => {
    const [searchParams] = useSearchParams()
    const role = (searchParams.get("role") || "user") as UserRoleType

    return (
        <Page title="Create an account" mainSize="form">
            <SignupNav />

            <Text tag="h1">Signup as {role}</Text>

            <SignupForm />
        </Page>
    )
}
