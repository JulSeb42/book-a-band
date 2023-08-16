/*=============================================== SendMessage ===============================================*/

import {
    useState,
    useContext,
    type Dispatch,
    type FormEvent,
    type SetStateAction,
} from "react"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import { ButtonIcon, INPUT_HEIGHT } from "components"
import { useKeyPress } from "hooks"
import type { MessageType, WhichUserType } from "types"

import { Textarea, ChatForm } from "components/conversation/Chat/styles"

interface SendMessageProps {
    id: string
    messages: MessageType[]
    setMessages: Dispatch<SetStateAction<MessageType[]>>
    whichUser: WhichUserType
    inputHeight: number
    setInputHeight: Dispatch<SetStateAction<number>>
}

export const SendMessage = ({
    id,
    messages,
    setMessages,
    whichUser,
    inputHeight,
    setInputHeight,
}: SendMessageProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const [body, setBody] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submit = async () => {
        if (user) {
            setIsLoading(true)

            return await conversationService
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
                    setInputHeight(INPUT_HEIGHT)
                    setIsLoading(false)
                })
                .catch(err => {
                    alert(err.response.data.message)
                    setIsLoading(false)
                })
        }
    }

    useKeyPress(
        () => {
            if (isFocused && body.length) {
                submit()
            }
        },
        ["Enter"],
        true
    )

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        return await submit()
    }

    return (
        <ChatForm onSubmit={handleSubmit}>
            <Textarea
                id="body"
                placeholder="Type your message..."
                value={body}
                onChange={e => {
                    const { value, scrollHeight } = e.target

                    setBody(value)

                    if (!value) setInputHeight(INPUT_HEIGHT)
                    else setInputHeight(scrollHeight)
                }}
                onKeyUp={e => {
                    if (e.key === "Enter") e.preventDefault()

                    if (e.key === "Enter" && e.shiftKey) {
                        e.preventDefault()
                        setBody(`${body}`)
                    }
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                $height={inputHeight}
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
