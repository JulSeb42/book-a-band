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

    return messages?.map(message => {
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
                        user?._id === message.sender._id ? "sent" : "received"
                    }
                >
                    {message.body}
                </Bubble>

                <Text tag="small">
                    {dateMessage === today
                        ? "Today"
                        : convertDateShort(new Date(dateMessage))}{" "}
                    at {getTimeFromIso(isoDate)}
                </Text>
            </Flexbox>
        )
    })
}
