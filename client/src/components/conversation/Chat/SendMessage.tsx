/*=============================================== SendMessage ===============================================*/

import { useState, useContext } from "react"
import type { ChangeEvent, Dispatch, SetStateAction } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { conversationService } from "api"

import { ButtonIcon } from "components"
import type { MessageType, WhichUserType } from "types"

import { Textarea, ChatForm } from "components/conversation/Chat/styles"

interface SendMessageProps {
    id: string
    messages: MessageType[]
    setMessages: Dispatch<SetStateAction<MessageType[]>>
    whichUser: WhichUserType
}

export const SendMessage = ({
    id,
    messages,
    setMessages,
    whichUser,
}: SendMessageProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const [body, setBody] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLoading(true)

        conversationService
            .newMessage({
                body,
                sender: user?._id!,
                conversation: id,
                whichUser,
            })
            .then(res => {
                setMessages([...messages, res.data])
                setBody("")
                setIsLoading(false)
            })
            .catch(err => {
                alert(err.response.data.message)
                setIsLoading(false)
            })
    }

    return (
        <ChatForm onSubmit={handleSubmit}>
            <Textarea
                id="body"
                value={body}
                onChange={e => setBody(e.target.value)}
            />

            <ButtonIcon
                icon="send"
                type="submit"
                disabled={!body.length}
                isLoading={isLoading}
            />
        </ChatForm>
    )
}
