/*=============================================== DeleteAccount ===============================================*/

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { userService } from "api"

import { Button, Modal, Alert, Text, Flexbox } from "components"
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
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)

    const handleDelete = () => {
        setIsDeleteLoading(true)

        if (user && logoutUser)
            userService
                .deleteAccount(user?._id)
                .then(() => {
                    setIsOpen(false)
                    logoutUser()
                    navigate(PATHS.GOODBYE)
                    setIsDeleteLoading(false)
                })
                .catch(err => {
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

                    <Flexbox gap="xs">
                        <Button
                            color="danger"
                            onClick={handleDelete}
                            isLoading={isLoading || isDeleteLoading}
                        >
                            Yes, delete my account
                        </Button>

                        <Button
                            variant="transparent"
                            onClick={() => setIsOpen(false)}
                        >
                            No, cancel
                        </Button>
                    </Flexbox>
                </Alert>
            </Modal>

            <ErrorMessage error={errorMessage} />
        </>
    )
}
