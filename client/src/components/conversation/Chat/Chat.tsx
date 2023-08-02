/*=============================================== Chat component ===============================================*/

import { useState, useEffect, useContext, useRef } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Hr, Text, INPUT_HEIGHT } from "components"
import { SendMessage } from "components/conversation/Chat/SendMessage"
import { Bubble } from "components/conversation/Chat/Bubble"
import type { MessageType, WhichUserType } from "types"

import {
    StyledChat,
    StyledMessagesContainer,
    StyledButton,
} from "components/conversation/Chat/styles"
import type { ChatProps } from "components/conversation/Chat/types"

export const Chat = ({ conversation, isLoading }: ChatProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const [messages, setMessages] = useState<MessageType[]>([])
    const [whichUser, setWhichUser] = useState<WhichUserType>(undefined)
    const [isButtonVisible, setIsButtonVisible] = useState(false)
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

    const scrollToBottom = () => {
        if (containerRef?.current) {
            const scrollHeight = containerRef?.current?.scrollHeight
            const height = containerRef?.current?.clientHeight
            const maxScrollTop = scrollHeight - height

            containerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0

            setIsButtonVisible(false)
        }
    }

    useEffect(() => {
        scrollToBottom()

        containerRef.current?.addEventListener("scroll", () => {
            const scroll = containerRef.current?.scrollTop || 0
            const height = containerRef.current?.offsetHeight || 0
            const maxScroll = (scroll - height) * -1

            if (scroll < maxScroll) {
                setIsButtonVisible(true)
            } else {
                setIsButtonVisible(false)
            }
        })
    }, [messages])

    if (isLoading || !conversation) return <ChatSkeleton />

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

            <StyledButton
                icon="chevron-down"
                variant="ghost"
                onClick={scrollToBottom}
                $isVisible={isButtonVisible}
                $inputHeight={inputHeight}
            />

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
