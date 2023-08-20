/*=============================================== UserLineDashboard component ===============================================*/

import { capitalize } from "ts-utils-julseb"

import { Avatar, Text } from "components"
import { RightContainer } from "components/dashboard/UserLineDashboard/RightContainer"
import type { TextProps } from "components/ui/Text/types"

import {
    StyledUserLineDashboard,
    UserInfo,
    NameContainer,
    Name,
    StyledRightContainer,
} from "components/dashboard/UserLineDashboard/styles"
import type { UserLineDashboardProps } from "components/dashboard/UserLineDashboard/types"

const subtitlesProps: Partial<TextProps> = {
    tag: "small",
    color: "gray",
}

export function UserLineDashboard({
    user,
    page,
    setLoading,
    allUsers,
}: UserLineDashboardProps) {
    return (
        <StyledUserLineDashboard>
            <UserInfo>
                <Avatar user={user} size={32} />

                <NameContainer>
                    <Name>{user.fullName}</Name>

                    <Text {...subtitlesProps}>{capitalize(user.role)}</Text>

                    {!user.verified && (
                        <Text {...subtitlesProps}>
                            This user is not verified.
                        </Text>
                    )}
                </NameContainer>
            </UserInfo>

            <StyledRightContainer>
                <RightContainer
                    user={user}
                    page={page}
                    setLoading={setLoading}
                    allUsers={allUsers}
                />
            </StyledRightContainer>
        </StyledUserLineDashboard>
    )
}
