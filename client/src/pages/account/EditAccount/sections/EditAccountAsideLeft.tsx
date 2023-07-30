/*=============================================== EditAccountAsideLeft ===============================================*/

import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Skeleton, ImageUploader, Toggle } from "components"
import { PATHS } from "data"

import type { EditAccountSectionProps } from "pages/account/EditAccount/sections/types"

interface EditAccountAsideLeftProps extends EditAccountSectionProps {
    formId: string
    avatar: string
    setAvatar: Dispatch<SetStateAction<string>>
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<boolean>>
    isSubmitLoading: boolean
}

export const EditAccountAsideLeft = ({
    user,
    isLoading,
    formId,
    avatar,
    setAvatar,
    isVisible,
    setIsVisible,
    isSubmitLoading,
}: EditAccountAsideLeftProps) => {
    const navigate = useNavigate()

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
                isLoading={isLoading || isImageLoading || isSubmitLoading}
            >
                Save changes
            </Button>

            <Button
                onClick={() => navigate(PATHS.MY_ACCOUNT)}
                variant="transparent"
                disabled={isSubmitLoading}
                noPadding
            >
                Cancel
            </Button>
        </>
    )
}
