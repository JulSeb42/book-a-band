/*=============================================== ContactArtistForm ===============================================*/

import { useContext, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import { Form, Input } from "components"
import { PATHS } from "data"

import type { ErrorMessageType, UserType, ValidationStatusType } from "types"

interface ContactArtistFormProps {
    artist: UserType
}

export function ContactArtistForm({ artist }: ContactArtistFormProps) {
    const navigate = useNavigate()

    const {
        user,
        isLoading: isUserLoading,
        setUser,
        setToken,
    } = useContext(AuthContext) as AuthContextType

    const [body, setBody] = useState("")
    const [validation, setValidation] =
        useState<ValidationStatusType>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)

    const handleBody = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setBody(value)

        if (validation) {
            if (!value.length) setValidation("not-passed")
            else setValidation("passed")
        }
    }

    const handleReset = () => {
        setBody("")
        setValidation(undefined)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!body.length) {
            setValidation("not-passed")
            return
        }

        if (user && artist) {
            setIsLoading(true)

            return await conversationService
                .newConversation({
                    body,
                    user1: user?._id,
                    user2: artist._id,
                })
                .then(res => {
                    const { createdConversation, user, authToken } = res.data

                    setUser(user)
                    setToken(authToken)
                    navigate(PATHS.CONVERSATION(createdConversation._id))
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setErrorMessage(err)
                    setIsLoading(false)
                })
        }
    }

    return (
        <Form
            onSubmit={handleSubmit}
            buttonPrimary="Send"
            buttonSecondary={{ text: "Cancel", onClick: handleReset }}
            isLoading={isLoading || isUserLoading}
            error={errorMessage}
        >
            <Input
                id="body"
                type="textarea"
                value={body}
                onChange={handleBody}
            />
        </Form>
    )
}
