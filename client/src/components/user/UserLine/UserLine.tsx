/*=============================================== UserLine component ===============================================*/

import { useState, type ChangeEvent } from "react"
import { capitalize } from "ts-utils-julseb"

import { Avatar, ButtonIcon, Flexbox, Text, Icon } from "components"
import { InputRightContainer } from "components/forms/InputComponents"

import {
    StyledUserLine,
    Username,
    SelectContainer,
    Select,
} from "components/user/UserLine/styles"
import type { UserLineProps } from "components/user/UserLine/types"

export const UserLine = ({ user }: UserLineProps) => {
    const [role, setRole] = useState<string>(user.role)
    const roles = ["admin", "artist", "user"]

    const handleRole = (e: ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value.toLowerCase())
    }

    return (
        <StyledUserLine>
            <Username>
                <Avatar src={user.avatar} size={32} username={user.fullName} />
                <Text tag="strong">{user.fullName}</Text>
            </Username>

            <SelectContainer>
                <Select value={role} onChange={handleRole}>
                    {roles.map((userRole, i) => (
                        <option value={userRole} key={i}>
                            {capitalize(userRole)}
                        </option>
                    ))}
                </Select>

                <InputRightContainer>
                    <Icon src="chevron-down" size={16} color="primary" />
                </InputRightContainer>
            </SelectContainer>

            <Flexbox gap="xs" justifyContent="flex-end">
                {/* Approve user */}
                <ButtonIcon
                    icon={user.isApproved ? "close" : "check"}
                    variant="transparent"
                    size={32}
                    color={user.isApproved ? "danger" : "success"}
                    label={`${user.isApproved ? "Unapprove" : "Approve"} user`}
                    disabled={user.role !== "artist"}
                    showLabel
                />

                <ButtonIcon
                    icon="message"
                    variant="transparent"
                    size={32}
                    label="Message"
                    showLabel
                />
            </Flexbox>
        </StyledUserLine>
    )
}
