/*=============================================== ImageUploader component ===============================================*/

import type { ChangeEvent } from "react"

import { cloudinaryService } from "api"

import { Icon } from "components"
import { InputContainer } from "components/forms/InputComponents"
import type { UserType } from "types"

import {
    StyledImageUploader,
    StyledAvatar,
    IconContainer,
    Input,
} from "components/forms/ImageUploader/styles"
import type { ImageUploaderProps } from "components/forms/ImageUploader/types"

export const ImageUploader = ({
    image,
    setImage,
    setIsLoading,
    id,
    label,
    helper,
}: ImageUploaderProps) => {
    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const uploadData = new FormData()
        setIsLoading(true)

        uploadData.append("imageUrl", e.target.files ? e.target.files[0] : "")

        await cloudinaryService
            .uploadImage(uploadData)
            .then(res => {
                setImage(res.secure_url)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        if (e.target.files && e.target.files[0]) {
            // @ts-expect-error => fix types
            setImage(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                // @ts-expect-error => fix types
                setImage(reader.result)
            })

            return reader.readAsDataURL(e.target.files[0])
        }
    }

    const user: Partial<UserType> = {
        avatar: image,
        fullName: "uploader",
    }

    return (
        <InputContainer id={id} label={label} helper={helper}>
            <StyledImageUploader htmlFor={id}>
                <StyledAvatar user={user} />

                <IconContainer>
                    <Icon src="edit" size={24} />
                </IconContainer>
            </StyledImageUploader>

            <Input id={id} type="file" onChange={e => handleImage(e)} />
        </InputContainer>
    )
}
