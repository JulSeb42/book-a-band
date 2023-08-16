/*=============================================== Page ===============================================*/

import { useEffect, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

import { Wrapper, Main, Text } from "components"
import { Helmet } from "components/layouts/Helmet"
import { Header } from "components/layouts/Header"
import { Footer } from "components/layouts/Footer"

import type { HelmetProps } from "components/layouts/Helmet"
import type { MainSizesType } from "components/layouts/Main/types"
import type { ServerErrorType } from "types"

export interface PageProps extends HelmetProps {
    children?: ReactNode | ReactNode[]
    noWrapper?: boolean
    noHeader?: boolean
    noMain?: boolean
    mainSize?: MainSizesType
    error?: ServerErrorType
}

export function Page({
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
}: PageProps) {
    const { pathname, search } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname, search])

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
                                Error while fetching data:{" "}
                                {error?.response?.data?.message}
                            </Text>
                        </Main>
                    ) : !noMain ? (
                        <Main size={mainSize}>{children}</Main>
                    ) : (
                        children
                    )}
                </Wrapper>
            )}

            {!noHeader && <Footer />}
        </>
    )
}
