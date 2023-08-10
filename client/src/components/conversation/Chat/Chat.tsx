/*=============================================== Chat component ===============================================*/

import { useState, useEffect, useContext, useRef, useCallback } from "react"

import { AuthContext, type AuthContextType } from "context"

import { Hr, Text, INPUT_HEIGHT } from "components"
import { SendMessage } from "components/conversation/Chat/SendMessage"
import { Bubble } from "components/conversation/Chat/Bubble"
import type { MessageType, WhichUserType } from "types"

import {
    StyledChat,
    StyledMessagesContainer,
} from "components/conversation/Chat/styles"
import type { ChatProps } from "components/conversation/Chat/types"

export const Chat = ({ conversation, isLoading }: ChatProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const [messages, setMessages] = useState<MessageType[]>([])
    const [whichUser, setWhichUser] = useState<WhichUserType>(undefined)
    const [inputHeight, setInputHeight] = useState(INPUT_HEIGHT)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (conversation && user) {
            setMessages(conversation.messages)
            setWhichUser(
                conversation.user1._id === user?._id ? "user2" : "user1"
            )
        }
    }, [conversation, user])

    const scrollToBottom = useCallback(() => {
        if (containerRef?.current) {
            const scrollHeight = containerRef?.current?.scrollHeight
            const height = containerRef?.current?.clientHeight
            const maxScrollTop = scrollHeight - height

            containerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
        }
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages, scrollToBottom])

    if (isLoading || !conversation) return <ChatSkeleton />

    console.log(messages)

    return (
        <StyledChat>
            <StyledMessagesContainer
                ref={containerRef}
                $isEmpty={!messages.length}
            >
               
                {messages?.length ? (
                    messages.map(message => (
                        <Bubble message={message} key={message._id} />
                    ))
                ) : (
                    <Text>No message yet.</Text>
                )}
            </StyledMessagesContainer>

            <Hr />

            <SendMessage
                id={conversation?._id}
                messages={messages}
                setMessages={setMessages}
                whichUser={whichUser}
                inputHeight={inputHeight}
                setInputHeight={setInputHeight}
            />
        </StyledChat>
    )
}

const ChatSkeleton = () => {
    return null // TODO: Add skeleton
}
