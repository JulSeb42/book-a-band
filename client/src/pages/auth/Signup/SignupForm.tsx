/*=============================================== SignupForm ===============================================*/

import { useContext, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { emailRegex, passwordRegex } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { authService } from "api"

import { Form, Input, Password, Autocomplete, ErrorMessage } from "components"
import { PATHS, GERMAN_CITIES } from "data"

import type {
    UserRoleType,
    ValidationStatusType,
    ErrorMessageType,
} from "types"

type ValidationInputsType = {
    fullName: ValidationStatusType | undefined
    email: ValidationStatusType | undefined
    password: ValidationStatusType | undefined
    city: ValidationStatusType | undefined
}

export const SignupForm = () => {
    const navigate = useNavigate()

    const { loginUser } = useContext(AuthContext) as AuthContextType

    const [searchParams] = useSearchParams()
    const role = (searchParams.get("role") || "user") as UserRoleType

    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        password: "",
    })
    const [city, setCity] = useState<string>("")
    const [validation, setValidation] = useState<ValidationInputsType>({
        fullName: undefined,
        email: undefined,
        password: undefined,
        city: undefined,
    })
    const [error, setError] = useState<ErrorMessageType>(undefined)

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id
        const value = e.target.value

        setInputs({
            ...inputs,
            [id]: value,
        })

        if (value.length) {
            if (id === "email") {
                setValidation({
                    ...validation,
                    email: emailRegex.test(value) ? "passed" : "not-passed",
                })
            } else if (id === "password") {
                setValidation({
                    ...validation,
                    password: passwordRegex.test(value)
                        ? "passed"
                        : "not-passed",
                })
            }
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!inputs.fullName.length || !city.length) {
            setValidation({
                ...validation,
                fullName: !inputs.fullName.length ? "not-passed" : undefined,
                city: !city.length ? "not-passed" : undefined,
            })
            return
        }

        authService
            .signup({
                ...inputs,
                city,
            })
            .then(res => {
                loginUser(res.data.authToken)
                navigate(PATHS.THANK_YOU)
            })
            .catch(err => setError(err))
    }

    return (
        <>
            <Form
                buttonPrimary="Create a new account"
                buttonSecondary={{
                    text: "Cancel",
                    to: PATHS.ARTISTS,
                }}
                onSubmit={handleSubmit}
            >
                <Input
                    id="fullName"
                    label={`${role === "artist" ? "Display" : "Full"} name`}
                    value={inputs.fullName}
                    onChange={handleInputs}
                    validation={validation.fullName}
                    autoFocus
                />

                <Input
                    id="email"
                    label="Email"
                    type="email"
                    value={inputs.email}
                    onChange={handleInputs}
                    validation={validation.email}
                />

                <Password
                    id="password"
                    label="Password"
                    value={inputs.password}
                    onChange={handleInputs}
                    validation={validation.password}
                />

                <Autocomplete
                    label="City"
                    value={city}
                    setValue={setCity}
                    options={GERMAN_CITIES}
                />
            </Form>

            <ErrorMessage error={error} />
        </>
    )
}
