/*=============================================== SectionArtists ===============================================*/

import { useState } from "react"

import { userService } from "api"

import { ButtonIcon } from "components"
import { toast } from "utils"
import { FORM_VALIDATION } from "errors"
import type { UserType } from "types"

import type { DashboardSectionProps } from "components/dashboard/UserLineDashboard/sections/types"

export function SectionArtists({ user, setLoading }: DashboardSectionProps) {
    const [artist, setArtist] = useState<UserType>(user)

    const handleClick = (isApproved: boolean) => {
        setLoading(true)

        userService
            .approveArtist(artist._id, { isApproved })
            .then(res => setArtist(res.data))
            .catch(err => {
                toast.error("An error occured, check console.")
                console.log(err)
            })
    }

    return (
        <>
            <ButtonIcon
                icon="check"
                size={24}
                color="success"
                onClick={() => handleClick(true)}
                disabled={!artist.verified || artist.isApproved === true}
                label={
                    !artist.verified
                        ? FORM_VALIDATION.USER_NOT_VERIFIED
                        : "Approve"
                }
                showLabel
            />

            <ButtonIcon
                icon="close"
                size={24}
                color="danger"
                onClick={() => handleClick(false)}
                disabled={!artist.verified || artist.isApproved === false}
                label={
                    !artist.verified
                        ? FORM_VALIDATION.USER_NOT_VERIFIED
                        : "Reject"
                }
                showLabel
            />
        </>
    )
}
