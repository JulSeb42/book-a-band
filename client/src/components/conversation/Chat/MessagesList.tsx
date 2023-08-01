/*=============================================== MessagesList ===============================================*/

import { useContext } from "react"
import { convertDateShort } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"

import { Text, Flexbox } from "components"
import { getDateFromIso, getTimeFromIso } from "utils"
import type { MessageType } from "types"

import { Bubble } from "components/conversation/Chat/styles"

interface MessagesListProps {
    messages: MessageType[]
}

export const MessagesList = ({ messages }: MessagesListProps) => {
    const { user } = useContext(AuthContext) as AuthContextType

    if (!messages.length) return <Text>No message yet.</Text>

    return (
        <>
            {messages?.map(message => {
                const isoDate = new Date(message?.updatedAt)
                const dateMessage = getDateFromIso(isoDate)
                const today = getDateFromIso(new Date())

                const messageType =
                    user?._id === message.sender._id ? "sent" : "received"

                return (
                    <Flexbox
                        alignItems={
                            messageType === "sent" ? "flex-end" : "flex-start"
                        }
                        flexDirection="column"
                        key={message._id}
                    >
                        <Bubble $type={messageType}>{message.body}</Bubble>

                        <Text tag="small" color="gray">
                            {dateMessage === today
                                ? "Today"
                                : convertDateShort(new Date(dateMessage))}{" "}
                            at {getTimeFromIso(isoDate)}
                        </Text>
                    </Flexbox>
                )
            })}
        </>
    )
}
