/*=============================================== Chat component ===============================================*/

import { useContext } from "react"
import { convertDateShort } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Flexbox, Text, Hr, ButtonIcon } from "components"
import { getTimeFromIso, getDateFromIso } from "utils"

import {
    StyledChat,
    Bubble,
    MessagesContainer,
    Textarea,
} from "components/conversation/Chat/styles"
import type { ChatProps } from "components/conversation/Chat/types"

export const Chat = ({ conversation, isLoading }: ChatProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    if (isLoading || !conversation) return <ChatSkeleton />

    const { messages } = conversation

    return (
        <StyledChat>
            <MessagesContainer $isEmpty={!messages?.length}>
                {messages?.length ? (
                    messages?.map(message => {
                        const isoDate = new Date(message?.updatedAt)
                        const dateMessage = getDateFromIso(isoDate)
                        const today = getDateFromIso(new Date())

                        return (
                            <Flexbox
                                alignItems="stretch"
                                flexDirection="column"
                                key={message._id}
                            >
                                <Bubble
                                    $type={
                                        user?._id === message.sender._id
                                            ? "sent"
                                            : "received"
                                    }
                                >
                                    {message.body}
                                </Bubble>

                                <Text tag="small">
                                    {dateMessage === today
                                        ? "Today"
                                        : convertDateShort(
                                              new Date(dateMessage)
                                          )}{" "}
                                    at {getTimeFromIso(isoDate)}
                                </Text>
                            </Flexbox>
                        )
                    })
                ) : (
                    <Text>No message yet.</Text>
                )}
            </MessagesContainer>

            <Hr />

            <Flexbox alignItems="flex-end" gap="xs">
                <Textarea />
                <ButtonIcon icon="send" />
            </Flexbox>
        </StyledChat>
    )
}

const ChatSkeleton = () => {
    return null // TODO: Add skeleton
}
