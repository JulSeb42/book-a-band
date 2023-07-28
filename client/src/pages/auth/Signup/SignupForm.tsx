/*=============================================== SignupForm ===============================================*/

import { useContext, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { emailRegex, passwordRegex } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { authService } from "api"

import { Form, Input, Password, Autocomplete } from "components"
import { ErrorMessage, FORM_VALIDATION } from "errors"
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
}

export const SignupForm = () => {
    const navigate = useNavigate()

    const { loginUser } = useContext(AuthContext) as AuthContextType

    const [searchParams] = useSearchParams()
    const role = (searchParams.get("role") || "user") as UserRoleType

    const [inputs, setInputs] = useState({
        fullName: "Julien Sebag",
        email: "julien.sebag@me.com",
        password: "Password42",
    })
    const [city, setCity] = useState<string>("Berlin")
    const [validation, setValidation] = useState<ValidationInputsType>({
        fullName: undefined,
        email: undefined,
        password: undefined,
    })
    const [validationCity, setValidationCity] = useState<
        ValidationStatusType | undefined
    >(undefined)
    const [error, setError] = useState<ErrorMessageType>(undefined)

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id
        const value = e.target.value

        setInputs({
            ...inputs,
            [id]: value,
        })

        if (id === "fullName" && validation.fullName) {
            setValidation({
                ...validation,
                fullName: !value?.length ? "not-passed" : "passed",
            })
        }

        if (id === "email" && validation.email) {
            setValidation({
                ...validation,
                email: emailRegex.test(value) ? "passed" : "not-passed",
            })
        }

        if (id === "password" && (value.length || validation.password)) {
            setValidation({
                ...validation,
                password: passwordRegex.test(value) ? "passed" : "not-passed",
            })
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            !inputs.fullName.length ||
            !city.length ||
            !emailRegex.test(inputs.email) ||
            !passwordRegex.test(inputs.password)
        ) {
            setValidation({
                fullName: !inputs.fullName.length ? "not-passed" : undefined,
                email: !emailRegex.test(inputs.email)
                    ? "not-passed"
                    : undefined,
                password: !passwordRegex.test(inputs.password)
                    ? "not-passed"
                    : undefined,
            })

            if (!city.length) setValidationCity("not-passed")

            return
        }

        authService
            .signup({
                ...inputs,
                city,
                role,
            })
            .then(res => {
                loginUser(res.data.authToken)
                navigate(PATHS.THANK_YOU)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
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
                    validation={{
                        status: validation.fullName,
                        message: FORM_VALIDATION.FULL_NAME_REQUIRED,
                    }}
                    autoFocus
                />

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
                />

                <Password
                    id="password"
                    label="Password"
                    value={inputs.password}
                    onChange={handleInputs}
                    validation={{
                        status: validation.password,
                        message: FORM_VALIDATION.PASSWORD_REGEX_NOT_PASSED,
                    }}
                />

                <Autocomplete
                    id="city"
                    label="City"
                    value={city}
                    setValue={setCity}
                    options={GERMAN_CITIES}
                    validation={{
                        status: validationCity,
                        message: FORM_VALIDATION.CITY_REQUIRED,
                    }}
                    setValidation={setValidationCity}
                />
            </Form>

            <ErrorMessage error={error} />
        </>
    )
}
