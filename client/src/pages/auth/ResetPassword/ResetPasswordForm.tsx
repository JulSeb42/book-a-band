/*=============================================== ResetPasswordForm ===============================================*/

import { useState, useEffect } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { passwordRegex } from "ts-utils-julseb"

import { authService, userService } from "api"

import { Form, Password, Text } from "components"
import { FORM_VALIDATION } from "errors"
import { PATHS } from "data"

import type { ValidationStatusType, ErrorMessageType, UserType } from "types"

export const ResetPasswordForm = () => {
    const navigate = useNavigate()
    const { token, id } = useParams<{ token: string; id: string }>()

    const [foundUser, setFoundUser] = useState<UserType | undefined | null>(
        undefined
    )
    const [isUserLoading, setIsUserLoading] = useState(true)

    useEffect(() => {
        userService
            .getUser(id!)
            .then(res => {
                setFoundUser(res.data)
                setIsUserLoading(false)
            })
            .catch(() => {
                setFoundUser(null)
                setIsUserLoading(false)
            })
    }, [id])

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

        await authService
            .resetPassword({
                id: id!,
                password,
                resetToken: token!,
            })
            .then(() => navigate(PATHS.LOGIN))
            .catch(err => {
                setErrorMessage(err)
                setIsFormLoading(false)
            })
    }

    if (foundUser === null)
        return <Text>No user has been found with this ID!</Text>

    return (
        <Form
            onSubmit={handleSubmit}
            buttonPrimary="Send"
            isLoading={isFormLoading || isUserLoading}
            error={errorMessage}
        >
            <Password
                id="password"
                label="New password"
                isLoading={isUserLoading}
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
