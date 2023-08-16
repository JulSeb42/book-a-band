/*=============================================== SectionDashboard ===============================================*/

import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"
import { conversationService } from "api"

import { ButtonIcon } from "components"
import { PATHS } from "data"
import type { ButtonIconProps } from "components/ui/ButtonIcon/types"

import type { DashboardSectionProps } from "components/dashboard/UserLineDashboard/sections/types"

export function SectionDashboard({ user }: DashboardSectionProps) {
    const navigate = useNavigate()

    const {
        user: loggedInUser,
        setUser,
        setToken,
    } = useContext(AuthContext) as AuthContextType

    const buttonProps: Partial<
        Omit<ButtonIconProps, "disabled" | "type" | "to" | "blank">
    > = {
        size: 32,
        variant: "transparent",
        showLabel: true,
    }

    const findConversation = user.conversations.find(
        conversation =>
            conversation.user1._id === loggedInUser?._id ||
            conversation.user2._id === loggedInUser?._id
    )

    const handleCreateConversation = async () => {
        if (loggedInUser) {
            return await conversationService
                .newConversation({
                    user1: loggedInUser?._id,
                    user2: user._id,
                })
                .then(res => {
                    const { createdConversation, user, authToken } = res.data
                    setUser(user)
                    setToken(authToken)
                    navigate(PATHS.CONVERSATION(createdConversation?._id))
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            {user.role === "artist" && (
                <ButtonIcon
                    icon="file"
                    label="Visit page"
                    to={PATHS.ARTIST(user._id)}
                    {...buttonProps}
                />
            )}

            {user._id !== loggedInUser?._id && user.verified && (
                <>
                    <ButtonIcon
                        icon="message"
                        label="Contact"
                        to={
                            findConversation
                                ? PATHS.CONVERSATION(findConversation._id)
                                : undefined
                        }
                        onClick={
                            findConversation
                                ? undefined
                                : () => handleCreateConversation()
                        }
                        {...buttonProps}
                    />
                </>
            )}
        </>
    )
}
