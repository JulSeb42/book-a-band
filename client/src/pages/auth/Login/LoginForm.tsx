/*=============================================== Login ===============================================*/

import { useState, useContext, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { emailRegex } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { authService } from "api"

import { Form, Input, Password } from "components"
import { FORM_VALIDATION } from "errors"
import type { ErrorMessageType, ValidationStatusType } from "types"

type LoginFormValidationType = {
    email: ValidationStatusType
    password: ValidationStatusType
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext) as AuthContextType

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)
    const [validation, setValidation] = useState<LoginFormValidationType>({
        email: undefined,
        password: undefined,
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target

        setInputs({
            ...inputs,
            [id]: value,
        })

        if (validation.email && id === "email") {
            if (!emailRegex.test(value))
                setValidation({ ...validation, email: "not-passed" })
            else setValidation({ ...validation, email: "passed" })
        }

        if (validation.password && id === "password") {
            if (!value.length)
                setValidation({ ...validation, password: "not-passed" })
            else setValidation({ ...validation, password: "passed" })
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!emailRegex.test(inputs.email) || !inputs.password.length) {
            setValidation({
                email: !emailRegex.test(inputs.email)
                    ? "not-passed"
                    : undefined,
                password: !inputs.password.length ? "not-passed" : undefined,
            })
            return
        }

        setIsLoading(true)

        await authService
            .login(inputs)
            .then(res => {
                loginUser(res.data.authToken)
                navigate(-1)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setErrorMessage(err)
                setIsLoading(false)
            })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            buttonPrimary="Login"
            buttonSecondary={{
                text: "Cancel",
                onClick: () => navigate(-1),
            }}
            isLoading={isLoading}
            error={errorMessage}
        >
            <Input
                id="email"
                label="Email"
                type="email"
                value={inputs.email}
                onChange={handleInputs}
                validation={{
                    status: validation.email,
                    message: FORM_VALIDATION.EMAIL_REQUIRED,
                }}
                autoFocus
            />

            <Password
                id="password"
                label="Password"
                value={inputs.password}
                onChange={handleInputs}
                validation={{
                    status: validation.password,
                    message: FORM_VALIDATION.PASSWORD_REQUIRED,
                }}
            />
        </Form>
    )
}
