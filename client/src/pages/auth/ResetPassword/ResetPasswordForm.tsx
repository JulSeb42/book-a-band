/*=============================================== ResetPasswordForm ===============================================*/

import { useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { passwordRegex } from "ts-utils-julseb"

import { authService } from "api"

import { Form, Password, Text } from "components"
import { FORM_VALIDATION } from "errors"
import { PATHS } from "data"
import { toast } from "utils"
import { useFetchUser } from "hooks"

import type { ValidationStatusType, ErrorMessageType } from "types"

export function ResetPasswordForm() {
    const navigate = useNavigate()
    const { token, id } = useParams<{ token: string; id: string }>()

    const { user: foundUser, loading } = useFetchUser(id || "")

    const [password, setPassword] = useState("")
    const [validation, setValidation] =
        useState<ValidationStatusType>(undefined)
    const [isFormLoading, setIsFormLoading] = useState(false)
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setPassword(value)

        if (value.length) {
            if (!passwordRegex.test(value)) setValidation("not-passed")
            else setValidation("passed")
        } else {
            setValidation(undefined)
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!passwordRegex.test(password)) {
            setValidation("not-passed")
            return
        }

        setIsFormLoading(true)

        if (id && token)
            await authService
                .resetPassword({
                    id: id,
                    password,
                    resetToken: token,
                })
                .then(() => {
                    navigate(PATHS.LOGIN)
                    toast.success("Your password was reset successfully!")
                })
                .catch(err => {
                    setErrorMessage(err)
                    setIsFormLoading(false)
                })
        else if (!id) toast.error(FORM_VALIDATION.USER_ID_MISSING)
        else if (!token) toast.error(FORM_VALIDATION.TOKEN_MISSING)
    }

    if (foundUser === null)
        return <Text>No user has been found with this ID!</Text>

    return (
        <Form
            onSubmit={handleSubmit}
            buttonPrimary="Send"
            isLoading={isFormLoading || loading}
            error={errorMessage}
        >
            <Password
                id="password"
                label="New password"
                isLoading={loading}
                value={password}
                onChange={handlePassword}
                validation={{
                    status: validation,
                    message: FORM_VALIDATION.PASSWORD_REGEX_NOT_PASSED,
                }}
                autoFocus
            />
        </Form>
    )
}
