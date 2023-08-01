/*=============================================== SendMessage ===============================================*/

import { useState, useContext } from "react"
import type { Dispatch, FormEvent, SetStateAction } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { conversationService } from "api"

import { ButtonIcon } from "components"
import { useKeyPress } from "hooks"
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
    const [isFocused, setIsFocused] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submit = () => {
        if (user) {
            setIsLoading(true)

            conversationService
                .newMessage({
                    body,
                    sender: user?._id,
                    conversation: id,
                    whichUser,
                })
                .then(res => {
                    setMessages([
                        ...messages,
                        {
                            ...res.data,
                            sender: {
                                _id: user._id,
                            },
                        },
                    ])
                    setBody("")
                    setIsLoading(false)
                })
                .catch(err => {
                    alert(err.response.data.message)
                    setIsLoading(false)
                })
        }
    }

    useKeyPress(() => {
        if (isFocused && body.length) {
            submit()
        }
    }, ["Enter"])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }

    return (
        <ChatForm onSubmit={handleSubmit}>
            <Textarea
                id="body"
                placeholder="Type your message..."
                value={body}
                onChange={e => setBody(e.target.value)}
                onKeyDown={e => {
                    if (e.key === "Enter") e.preventDefault()
                    if (e.key === "Enter" && e.shiftKey) {
                        setBody(`${body}\n`)
                    }
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoFocus
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
