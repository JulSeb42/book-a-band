/*=============================================== Page ===============================================*/

import type { ReactNode } from "react"
import type { AxiosError } from "axios"

import { Wrapper, Main, Text } from "components"
import { Helmet } from "components/layouts/Helmet"
import { Header } from "components/layouts/Header"
import { Footer } from "components/layouts/Footer"

import type { HelmetProps } from "components/layouts/Helmet"
import type { MainSizesTypes } from "components/layouts/Main/types"

interface PageProps extends HelmetProps {
    children?: ReactNode | ReactNode[]
    noWrapper?: boolean
    noHeader?: boolean
    noMain?: boolean
    mainSize?: MainSizesTypes
    error?: AxiosError
}

export const Page = ({
    children,
    title,
    description,
    cover,
    keywords,
    noWrapper,
    noHeader,
    noMain,
    mainSize,
    error,
}: PageProps) => {
    return (
        <>
            <Helmet
                title={title}
                description={description}
                cover={cover}
                keywords={keywords}
            />

            {!noHeader && <Header />}

            {noWrapper ? (
                children
            ) : (
                <Wrapper>
                    {error ? (
                        <Main>
                            <Text tag="h1">An error occured</Text>

                            <Text>
                                Error while fetching data: {error.message}
                            </Text>
                        </Main>
                    ) : !noMain ? (
                        <Main size={mainSize || "large"}>{children}</Main>
                    ) : (
                        children
                    )}
                </Wrapper>
            )}

            {!noHeader && <Footer />}
        </>
    )
}
