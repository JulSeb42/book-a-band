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
    youtubeLinks: EditAccountYoutubeLinksType
    setYoutubeLinks: Dispatch<SetStateAction<EditAccountYoutubeLinksType>>
    validation: EditAccountValidationType
    setValidation: Dispatch<SetStateAction<EditAccountValidationType>>
}

export function EditAccountMain({
    user,
    isLoading,
    inputs,
    setInputs,
    city,
    setCity,
    youtubeLinks,
    setYoutubeLinks,
    validation,
    setValidation,
}: EditAccountMainProps) {
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

    const handleYoutubeLink = (e: ChangeEvent<HTMLInputElement>) =>
        setYoutubeLinks({ ...youtubeLinks, [e.target.id]: e.target.value })

    return (
        <>
            <Input
                id="fullName"
                label={`${user?.role === "artist" ? "Display" : "Full"} name`}
                value={inputs.fullName}
                onChange={handleInputs}
                isLoading={isLoading}
                autoFocus
            />

            <Input
                id="email"
                label="Email"
                type="email"
                value={user?.email}
                disabled
                helper="You can not edit your email."
                isLoading={isLoading}
            />

            <Autocomplete
                value={city}
                setValue={setCity}
                options={GERMAN_CITIES}
                label="City"
                id="city"
                isLoading={isLoading}
            />

            {user?.role === "artist" && (
                <>
                    <Input
                        id="genre"
                        label="Genre"
                        value={inputs.genre}
                        onChange={handleInputs}
                        isLoading={isLoading}
                    />

                    <Input
                        id="price"
                        label="Price"
                        value={inputs.price}
                        onChange={handleInputs}
                        min={0}
                        step={100}
                        type="number"
                        isLoading={isLoading}
                    />

                    <Input
                        id="bio"
                        type="textarea"
                        label="Bio"
                        helper={{
                            text: (
                                <>
                                    Here you can use{" "}
                                    <a
                                        href="https://www.markdownguide.org/cheat-sheet/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        markdown
                                    </a>{" "}
                                    to write your bio.
                                </>
                            ),
                        }}
                        value={inputs.bio}
                        onChange={handleInputs}
                        isLoading={isLoading}
                    />

                    <Input
                        id="facebookUrl"
                        label="Facebook url"
                        value={inputs.facebookUrl}
                        onChange={handleInputs}
                        type="url"
                        isLoading={isLoading}
                    />

                    <Input
                        id="instagramUrl"
                        label="Instagram url"
                        value={inputs.instagramUrl}
                        onChange={handleInputs}
                        type="url"
                        isLoading={isLoading}
                    />

                    <Input
                        id="youtubeUrl"
                        label="YouTube url"
                        value={inputs.youtubeUrl}
                        onChange={handleInputs}
                        type="url"
                        isLoading={isLoading}
                    />

                    <Input
                        id="youtube1"
                        label="Link to YouTube video"
                        value={youtubeLinks.youtube1}
                        onChange={handleYoutubeLink}
                        type="url"
                        isLoading={isLoading}
                    />

                    {youtubeLinks.youtube1.length ||
                    youtubeLinks.youtube2.length ? (
                        <Input
                            id="youtube2"
                            label="Link to YouTube video"
                            value={youtubeLinks.youtube2}
                            onChange={handleYoutubeLink}
                            type="url"
                            isLoading={isLoading}
                        />
                    ) : null}

                    {youtubeLinks.youtube2.length ||
                    youtubeLinks.youtube3.length ? (
                        <Input
                            id="youtube3"
                            label="Link to YouTube video"
                            value={youtubeLinks.youtube3}
                            onChange={handleYoutubeLink}
                            type="url"
                            isLoading={isLoading}
                        />
                    ) : null}
                </>
            )}
        </>
    )
}
