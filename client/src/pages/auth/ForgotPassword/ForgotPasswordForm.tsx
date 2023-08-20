/*=============================================== ForgotPasswordForm ===============================================*/

import { useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { emailRegex } from "ts-utils-julseb"

import { authService } from "api"

import { Form, Input } from "components"
import { FORM_VALIDATION } from "errors"
import { PATHS } from "data"

import type { ErrorMessageType, ValidationStatusType } from "types"

export function ForgotPasswordForm() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [validation, setValidation] =
        useState<ValidationStatusType>(undefined)
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setEmail(value)

        if (validation) {
            if (!emailRegex.test(value)) setValidation("not-passed")
            else setValidation("passed")
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!emailRegex.test(email)) {
            setValidation("not-passed")
            return
        }

        setIsLoading(true)

        await authService
            .forgotPassword({ email })
            .then(() => navigate(PATHS.FORGOT_PASSWORD_SENT))
            .catch(err => {
                setErrorMessage(err)
                setIsLoading(false)
            })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            buttonPrimary="Send"
            buttonSecondary={{ text: "Cancel", to: PATHS.LOGIN }}
            isLoading={isLoading}
            error={errorMessage}
        >
            <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={handleEmail}
                validation={{
                    status: validation,
                    message: FORM_VALIDATION.EMAIL_REQUIRED,
                }}
                autoFocus
            />
        </Form>
    )
}
