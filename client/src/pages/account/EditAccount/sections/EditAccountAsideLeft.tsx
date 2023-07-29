/*=============================================== EditAccountAsideLeft ===============================================*/

import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"

import { Button, Skeleton, ImageUploader, Toggle } from "components"
import { PATHS } from "data"

import type { EditAccountSectionProps } from "pages/account/EditAccount/sections/types"

interface EditAccountAsideLeftProps extends EditAccountSectionProps {
    formId: string
    avatar: string
    setAvatar: Dispatch<SetStateAction<string>>
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const EditAccountAsideLeft = ({
    user,
    isLoading,
    formId,
    avatar,
    setAvatar,
    isVisible,
    setIsVisible,
}: EditAccountAsideLeftProps) => {
    const [isImageLoading, setIsImageLoading] = useState(false)

    if (isLoading)
        return (
            <>
                <Skeleton
                    width={150}
                    height={150}
                    borderRadius="circle"
                    isShining
                />
                <Skeleton width={120} height={40} borderRadius="m" isShining />
                <Skeleton width={120} height={40} borderRadius="m" isShining />
            </>
        )

    return (
        <>
            <ImageUploader
                id="avatar"
                image={avatar}
                setImage={setAvatar}
                setIsLoading={setIsImageLoading}
            />

            {user?.role === "artist" && (
                <Toggle
                    id="isVisible"
                    label="Show my profile"
                    checked={isVisible}
                    onChange={e => setIsVisible(e.target.checked)}
                />
            )}

            <Button
                form={formId}
                type="submit"
                isLoading={isLoading || isImageLoading}
            >
                Save changes
            </Button>

            <Button to={PATHS.MY_ACCOUNT} variant="transparent" noPadding>
                Cancel
            </Button>
        </>
    )
}
