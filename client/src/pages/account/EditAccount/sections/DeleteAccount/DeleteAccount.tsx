/*=============================================== DeleteAccount ===============================================*/

import { useState, useContext, type FormEvent, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"
import { userService } from "api"

import { Button, Modal, Alert, Text, Flexbox, Password, Form } from "components"
import { ErrorMessage } from "errors"
import { PATHS } from "data"

import type { ErrorMessageType } from "types"

export const DeleteAccount = () => {
    const navigate = useNavigate()

    const { user, isLoading, logoutUser } = useContext(
        AuthContext
    ) as AuthContextType

    const [isOpen, setIsOpen] = useState(false)
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [buttonType, setButtonType] = useState<"button" | "submit">("button")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)

    useEffect(() => {
        if (isFormOpen) {
            setTimeout(() => setButtonType("submit"), 100)
        } else setButtonType("button")
    }, [isFormOpen])

    const handleDelete = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsDeleteLoading(true)

        if (user)
            return await userService
                .deleteAccount(user?._id, { password })
                .then(() => {
                    setIsOpen(false)
                    logoutUser()
                    navigate(PATHS.GOODBYE)
                    setIsDeleteLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setErrorMessage(err)
                    setIsOpen(false)
                    setIsDeleteLoading(false)
                })
    }

    return (
        <>
            <Button
                color="danger"
                onClick={() => setIsOpen(true)}
                alignSelf="start"
            >
                Delete your account
            </Button>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Alert>
                    <Text>Are you sure you want to delete your account?</Text>

                    {isFormOpen && (
                        <Form id="delete-form" onSubmit={handleDelete}>
                            <Password
                                id="password"
                                label="Please enter your password first"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoFocus
                            />
                        </Form>
                    )}

                    <Flexbox gap="xs">
                        <Button
                            color="danger"
                            onClick={() => setIsFormOpen(true)}
                            isLoading={isLoading || isDeleteLoading}
                            type={buttonType}
                            form="delete-form"
                        >
                            {isFormOpen ? "Delete" : "Yes, delete"} my account
                        </Button>

                        <Button
                            variant="transparent"
                            onClick={() => {
                                setIsOpen(false)
                                setPassword("")
                            }}
                        >
                            {isFormOpen ? "Cancel" : "No, cancel"}
                        </Button>
                    </Flexbox>
                </Alert>
            </Modal>

            <ErrorMessage error={errorMessage} />
        </>
    )
}
