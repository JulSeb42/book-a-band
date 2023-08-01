/*=============================================== Chat component ===============================================*/

import { useState, useEffect, useContext, useRef } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Hr } from "components"
import { SendMessage } from "components/conversation/Chat/SendMessage"
import { MessagesList } from "components/conversation/Chat/MessagesList"
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
    // const [isButtonVisible, setIsButtonVisible] = useState(true)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (conversation && user) {
            setMessages(conversation.messages)
            setWhichUser(
                conversation.user1._id === user?._id ? "user2" : "user1"
            )
        }
    }, [conversation, user, containerRef])

    if (isLoading || !conversation) return <ChatSkeleton />

    return (
        <StyledChat>
            <StyledMessagesContainer
                $isEmpty={!messages?.length}
                ref={containerRef}
            >
                <MessagesList messages={messages} />
            </StyledMessagesContainer>

            {/* <StyledButton
                icon="chevron-down"
                variant="transparent"
                $isVisible={isButtonVisible}
            /> */}

            <Hr />

            <SendMessage
                id={conversation?._id}
                messages={messages}
                setMessages={setMessages}
                whichUser={whichUser}
            />
        </StyledChat>
    )
}

const ChatSkeleton = () => {
    return null // TODO: Add skeleton
}
