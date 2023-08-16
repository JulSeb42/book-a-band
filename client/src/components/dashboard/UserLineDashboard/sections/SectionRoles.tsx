/*=============================================== SectionRoles ===============================================*/

import { useState, useEffect, type ChangeEvent } from "react"

import { userService } from "api"

import { Select } from "components/dashboard/SearchDashboard/Select"
import { toast } from "utils"
import type { UserRoleType, UserType } from "types"

import type { DashboardSectionProps } from "components/dashboard/UserLineDashboard/sections/types"

export const SectionRoles = ({
    user: userProp,
    setLoading,
    allUsers,
}: DashboardSectionProps) => {
    const [user, setUser] = useState(userProp)
    const [admins, setAdmins] = useState<UserType[]>([])
    const [role, setRole] = useState<UserRoleType>(user.role)

    const roles: UserRoleType[] = ["admin", "artist", "user"]

    useEffect(() => {
        if (allUsers) setAdmins(allUsers.filter(user => user.role === "admin"))
    }, [allUsers])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target as { value: UserRoleType }

        setRole(value)

        userService
            .setUserRole(user._id, { role: value })
            .then(res => {
                setUser(res.data)
                setLoading(true)
            })
            .catch(err => {
                toast.error("An error occured, check console.")
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <Select
            value={role}
            onChange={handleChange}
            options={roles}
            disabled={
                !user.verified ||
                (user.role === "admin" && admins?.length === 1)
            }
            helper={
                user.role === "admin" && admins?.length === 1
                    ? "There has to be at least one admin."
                    : undefined
            }
        />
    )
}
