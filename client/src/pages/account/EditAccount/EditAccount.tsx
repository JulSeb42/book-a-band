/*=============================================== EditAccount ===============================================*/

import { useContext, useState } from "react"
import type { FormEvent } from "react"
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
import { formatDate, sortDates } from "utils"

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
    const demoLoading = false

    const [avatar, setAvatar] = useState(user?.avatar!)
    const [isVisible, setIsVisible] = useState(user?.isVisible || false)
    const [inputs, setInputs] = useState<EditAccountMainInputType>({
        fullName: user?.fullName!,
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
    const [city, setCity] = useState(user?.city!)
    const [dates, setDates] = useState(user?.available || [])
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)
    const [validation, setValidation] = useState<EditAccountValidationType>({
        fullName: undefined,
        city: undefined,
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

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

        userService
            .editAccount(user!._id, requestBody)
            .then(res => {
                const { user, authToken } = res.data
                setUser(user)
                setToken(authToken)
                navigate(PATHS.MY_ACCOUNT)
            })
            .catch(err => setErrorMessage(err))
    }

    console.log(
        formatDate(
            new Date(
                '"Tue Aug 01 2023 00:00:00 GMT+0200 (heure d’été d’Europe centrale)"'
            )
        )
    )

    return (
        <Page title="Edit your account" noMain>
            <Aside gap="s" center>
                <EditAccountAsideLeft
                    user={user!}
                    isLoading={isLoading || demoLoading}
                    formId={FORM_ID}
                    avatar={avatar}
                    setAvatar={setAvatar}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
            </Aside>

            <Main size="form">
                <Text tag="h1">Edit your account</Text>

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
