/*=============================================== EditAccount ===============================================*/

import { useContext, useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteDuplicates } from "ts-utils-julseb"

import { AuthContext } from "context"
import type { AuthContextType } from "context/types"
import { userService } from "api"

import { Page, Main, Aside, Form, Text, Flexbox } from "components"
import {
    EditAccountAsideLeft,
    EditAccountMain,
    DeleteAccount,
    EditAccountAvailabilities,
} from "pages/account/EditAccount/sections"
import { PATHS } from "data"
import { formatDate, sortDates, toast } from "utils"

import type { ErrorMessageType } from "types"
import type {
    EditAccountMainInputType,
    EditAccountValidationType,
    EditAccountYoutubeLinksType,
} from "pages/account/EditAccount/sections/types"

export const EditAccount = () => {
    const FORM_ID = "edit-form"

    const navigate = useNavigate()

    const { user, isLoading, setUser, setToken } = useContext(
        AuthContext
    ) as AuthContextType

    const [avatar, setAvatar] = useState(user?.avatar || "")
    const [isVisible, setIsVisible] = useState(user?.isVisible || false)
    const [inputs, setInputs] = useState<EditAccountMainInputType>({
        fullName: user?.fullName || "",
        genre: user?.genre || "",
        price: user?.price || 0,
        bio: user?.bio || "",
        facebookUrl: user?.facebookUrl || "",
        instagramUrl: user?.instagramUrl || "",
        youtubeUrl: user?.youtubeUrl || "",
    })
    const [youtubeLinks, setYoutubeLinks] =
        useState<EditAccountYoutubeLinksType>({
            youtube1: user?.youtubeLinks[0] || "",
            youtube2: user?.youtubeLinks[1] || "",
            youtube3: user?.youtubeLinks[2] || "",
        })
    const [city, setCity] = useState(user?.city || "")
    const [dates, setDates] = useState(user?.available || [])
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)
    const [validation, setValidation] = useState<EditAccountValidationType>({
        fullName: undefined,
        city: undefined,
    })
    const [isSubmitLoading, setIsSubmitLoading] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!inputs.fullName.length || !city.length) {
            setValidation({
                fullName: !inputs.fullName.length ? "not-passed" : undefined,
                city: !city.length ? "not-passed" : undefined,
            })
            return
        }

        setIsSubmitLoading(true)

        const requestBody = {
            ...inputs,
            isVisible,
            avatar,
            youtubeLinks: [
                youtubeLinks.youtube1,
                youtubeLinks.youtube2,
                youtubeLinks.youtube3,
            ].filter(link => link !== ""),
            city,
            available: sortDates(
                deleteDuplicates(dates.map(d => formatDate(new Date(d))))
            ),
        }

        if (user) {
            userService
                .editAccount(user._id, requestBody)
                .then(res => {
                    const { user, authToken } = res.data
                    setUser(user)
                    setToken(authToken)
                    navigate(PATHS.MY_ACCOUNT)
                    setIsSubmitLoading(false)
                    toast.success("Changes were saved!")
                })
                .catch(err => {
                    setErrorMessage(err)
                    setIsSubmitLoading(false)
                })
        } else {
            toast.error("User's data is missing.")
        }
    }

    const PAGE_TITLE = "Edit your account"

    return (
        <Page title={PAGE_TITLE} noMain>
            <Aside gap="s" center>
                <EditAccountAsideLeft
                    user={user!}
                    isLoading={isLoading}
                    formId={FORM_ID}
                    avatar={avatar}
                    setAvatar={setAvatar}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    isSubmitLoading={isSubmitLoading}
                />
            </Aside>

            <Main size="form">
                <Text tag="h1">{PAGE_TITLE}</Text>

                <Form onSubmit={handleSubmit} id={FORM_ID} error={errorMessage}>
                    <EditAccountMain
                        user={user!}
                        isLoading={isLoading}
                        inputs={inputs}
                        setInputs={setInputs}
                        city={city!}
                        setCity={setCity}
                        youtubeLinks={youtubeLinks}
                        setYoutubeLinks={setYoutubeLinks}
                        validation={validation}
                        setValidation={setValidation}
                    />
                </Form>

                <Text>
                    <Link to="/my-account/edit-password">
                        Edit your password.
                    </Link>
                </Text>

                <DeleteAccount />
            </Main>

            <Aside gap="xs">
                {user?.role === "artist" && (
                    <>
                        <Text tag="h4">Availabilities</Text>

                        <Flexbox
                            flexDirection="column"
                            alignItems="stretch"
                            gap="xxs"
                        >
                            <EditAccountAvailabilities
                                isLoading={isLoading}
                                dates={dates}
                                setDates={setDates}
                            />
                        </Flexbox>
                    </>
                )}
            </Aside>
        </Page>
    )
}
