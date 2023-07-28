/*=============================================== Signup ===============================================*/

import { useSearchParams } from "react-router-dom"

import { Page, Text } from "components"
import { SignupNav } from "pages/auth/Signup/SignupNav"

import { RoleType } from "types"

export const Signup = () => {
    const [searchParams] = useSearchParams()
    const role = (searchParams.get("role") || "user") as RoleType

    return (
        <Page title="Create an account" mainSize="form">
            <SignupNav />
            <Text tag="h1">Signup as {role}</Text>
        </Page>
    )
}
