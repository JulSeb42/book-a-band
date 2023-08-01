/*=============================================== Chat component ===============================================*/

import { useState, useEffect, useContext } from "react"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Hr } from "components"
import { SendMessage } from "components/conversation/Chat/SendMessage"
import { MessagesList } from "components/conversation/Chat/MessagesList"
import type { MessageType } from "types"

import {
    StyledChat,
    MessagesContainer,
} from "components/conversation/Chat/styles"
import type {
    ChatProps,
    WhichUserType,
} from "components/conversation/Chat/types"

export const Chat = ({ conversation, isLoading }: ChatProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    const [messages, setMessages] = useState<MessageType[]>([])
    const [whichUser, setWhichUser] = useState<WhichUserType>(undefined)

    useEffect(() => {
        if (conversation && user) {
            setMessages(conversation.messages)
            setWhichUser(
                conversation.user1._id === user?._id ? "user2" : "user1"
            )
        }
    }, [conversation, user])

    if (isLoading || !conversation) return <ChatSkeleton />

    return (
        <StyledChat>
            <MessagesContainer $isEmpty={!messages?.length}>
                <MessagesList messages={messages} />
            </MessagesContainer>

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
