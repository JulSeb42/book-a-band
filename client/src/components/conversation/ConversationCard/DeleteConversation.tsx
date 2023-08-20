/*=============================================== DeleteConversation ===============================================*/

import { useRef, useState, type Dispatch, type SetStateAction } from "react"

import { conversationService } from "api"

import { ButtonIcon, Modal, Alert, Text, Flexbox, Button } from "components"
import { useClickOutside } from "hooks"
import { toast } from "utils"
import type { UserType } from "types"

import { DeleteContainer } from "components/conversation/ConversationCard/styles"

interface DeleteConversationProps {
    id: string
    otherUser: UserType
    setLoading: Dispatch<SetStateAction<boolean>>
}

export function DeleteConversation({
    id,
    otherUser,
    setLoading,
}: DeleteConversationProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const el = useRef<HTMLDivElement & HTMLFormElement>(null)

    useClickOutside(el, () => {
        if (isOpen) setIsOpen(false)
    })

    const handleDelete = () => {
        setIsLoading(true)

        conversationService
            .deleteConversation(id)
            .then(() => {
                setLoading(true)
                setIsOpen(false)
                toast.success("Conversation has been deleted.")
            })
            .catch(err => {
                toast.error("An error occured, try again later!")
                console.log(err)
                setIsOpen(false)
            })
    }

    return (
        <DeleteContainer>
            <ButtonIcon
                icon="trash"
                color="danger"
                variant="ghost"
                size={24}
                onClick={() => setIsOpen(true)}
            />

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Alert ref={el}>
                    <Text>
                        Are you sure you want to delete the conversation with{" "}
                        {otherUser.fullName}?
                    </Text>

                    <Flexbox gap="xs">
                        <Button
                            onClick={handleDelete}
                            color="danger"
                            isLoading={isLoading}
                        >
                            Yes, delete the conversation
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
        </DeleteContainer>
    )
}
