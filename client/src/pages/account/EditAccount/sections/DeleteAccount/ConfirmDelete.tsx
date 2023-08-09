/*=============================================== ConfirmDelete ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import { Button, Flexbox, Text } from "components"

interface ConfirmDeleteProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ConfirmDelete = ({ setIsOpen }: ConfirmDeleteProps) => {
    return (
        <>
            <Text>Are you sure you want to delete your account?</Text>

            <Flexbox gap="xs">
                <Button
                    color="danger"
                    // onClick={handleDelete}
                    // isLoading={isLoading || isDeleteLoading}
                >
                    Yes, delete my account
                </Button>

                <Button variant="transparent" onClick={() => setIsOpen(false)}>
                    No, cancel
                </Button>
            </Flexbox>
        </>
    )
}
