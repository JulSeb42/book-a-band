/*=============================================== ImageUploader component ===============================================*/

import type { ChangeEvent } from "react"

import { Icon } from "components"
import { InputContainer } from "components/forms/InputComponents"

import { cloudinaryService } from "api"

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
    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const uploadData = new FormData()
        setIsLoading(true)

        uploadData.append("imageUrl", e.target.files ? e.target.files[0] : "")

        cloudinaryService
            .uploadImage(uploadData)
            .then(res => {
                setImage(res.secure_url)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        if (e.target.files && e.target.files[0]) {
            // @ts-expect-error
            setImage(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                // @ts-expect-error
                setImage(reader.result)
            })

            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <InputContainer id={id} label={label} helper={helper}>
            <StyledImageUploader htmlFor={id}>
                <StyledAvatar src={image} />

                <IconContainer>
                    <Icon src="edit" size={24} />
                </IconContainer>
            </StyledImageUploader>

            <Input id={id} type="file" onChange={e => handleImage(e)} />
        </InputContainer>
    )
}
