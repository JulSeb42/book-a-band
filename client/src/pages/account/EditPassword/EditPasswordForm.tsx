/*=============================================== EditPasswordForm ===============================================*/

import { useState, useContext } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { passwordRegex } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { userService } from "api"

import { Password, Form } from "components"
import { PATHS } from "data"
import { FORM_VALIDATION } from "errors"
import type { ValidationStatusType, ErrorMessageType } from "types"

export const EditPasswordForm = () => {
    const navigate = useNavigate()

    const { user, isLoading, setUser, setToken } = useContext(
        AuthContext
    ) as AuthContextType

    const [inputs, setInputs] = useState({
        oldPassword: "",
        newPassword: "",
    })
    const [validation, setValidation] =
        useState<ValidationStatusType>(undefined)
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)
    const [isSubmitLoading, setIsSubmitLoading] = useState(false)

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target

        setInputs({ ...inputs, [id]: value })

        if (validation && id === "newPassword") {
            if (!passwordRegex.test(value)) setValidation("not-passed")
            else setValidation("passed")
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!passwordRegex.test(inputs.newPassword)) {
            setValidation("not-passed")
            return
        }

        setIsSubmitLoading(true)

        userService
            .editPassword(user?._id!, inputs)
            .then(res => {
                const { user, authToken } = res.data
                setUser(user)
                setToken(authToken)
                navigate(PATHS.MY_ACCOUNT)
                setIsSubmitLoading(false)
            })
            .catch(err => {
                setErrorMessage(err)
                setIsSubmitLoading(false)
            })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            buttonPrimary="Save new password"
            buttonSecondary={{ text: "Cancel", to: PATHS.MY_ACCOUNT }}
            error={errorMessage}
            isLoading={isSubmitLoading}
        >
            <Password
                id="oldPassword"
                label="Old password"
                value={inputs.oldPassword}
                onChange={handleInputs}
                isLoading={isLoading}
            />

            <Password
                id="newPassword"
                label="New password"
                value={inputs.newPassword}
                onChange={handleInputs}
                isLoading={isLoading}
                validation={{
                    status: validation,
                    message: FORM_VALIDATION.PASSWORD_REGEX_NOT_PASSED,
                }}
            />
        </Form>
    )
}
