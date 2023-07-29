/*=============================================== EditAccountMain ===============================================*/

import type { ChangeEvent, Dispatch, SetStateAction } from "react"

import { Input, Autocomplete } from "components"
import { GERMAN_CITIES } from "data"

import type {
    EditAccountSectionProps,
    EditAccountMainInputType,
    EditAccountYoutubeLinksType,
    EditAccountValidationType,
} from "pages/account/EditAccount/sections/types"

interface EditAccountMainProps extends EditAccountSectionProps {
    inputs: EditAccountMainInputType
    setInputs: Dispatch<SetStateAction<EditAccountMainInputType>>
    city: string
    setCity: Dispatch<SetStateAction<string>>
    bio: string
    setBio: Dispatch<SetStateAction<string>>
    youtubeLinks: EditAccountYoutubeLinksType
    setYoutubeLinks: Dispatch<SetStateAction<EditAccountYoutubeLinksType>>
    validation: EditAccountValidationType
    setValidation: Dispatch<SetStateAction<EditAccountValidationType>>
}

export const EditAccountMain = ({
    user,
    isLoading,
    inputs,
    setInputs,
    city,
    setCity,
    bio,
    setBio,
    youtubeLinks,
    setYoutubeLinks,
    validation,
    setValidation,
}: EditAccountMainProps) => {
    if (isLoading) return <EditAccountMainSkeleton />

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target

        setInputs({ ...inputs, [id]: value })

        if (id === "fullName" && validation.fullName) {
            if (!value.length)
                setValidation({ ...validation, fullName: "not-passed" })
            else setValidation({ ...validation, fullName: "passed" })
        }

        if (id === "city" && validation.city) {
            if (!value.length)
                setValidation({ ...validation, city: "not-passed" })
            else setValidation({ ...validation, city: "passed" })
        }
    }

    return (
        <>
            <Input
                id="fullName"
                label={`${user?.role === "artist" ? "Display" : "Full"} name`}
                value={inputs.fullName}
                onChange={handleInputs}
                autoFocus
            />

            <Input
                id="email"
                label="Email"
                type="email"
                value={user?.email}
                disabled
                helper="You can not edit your email."
            />

            <Autocomplete
                value={city}
                setValue={setCity}
                options={GERMAN_CITIES}
                label="City"
                id="city"
            />

            {user?.role === "artist" && (
                <>
                    <Input
                        id="genre"
                        label="Genre"
                        value={inputs.genre}
                        onChange={handleInputs}
                    />

                    {/* Price, Bio, Facebook URL, Instagram URL, Youtube URL, Youtube Links */}
                </>
            )}
        </>
    )
}

const EditAccountMainSkeleton = () => {
    return <></>
}
