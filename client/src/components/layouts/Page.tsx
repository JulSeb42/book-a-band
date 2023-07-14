/*=============================================== Page ===============================================*/

import { Wrapper, Main, PageLoading } from "tsx-library-julseb"

import { Helmet } from "components/layouts/Helmet"
import { Header } from "components/layouts/Header"
import { Footer } from "components/layouts/Footer"

import type { HelmetProps } from "components/layouts/Helmet"

export const Page = ({
    children,
    title,
    description,
    keywords,
    cover,
    mainWidth = "large",
    noWrapper,
    isLoading,
    template = "1col",
    noHeader,
}: PageProps) => {
    return (
        <>
            <Helmet
                title={title}
                description={description}
                keywords={keywords}
                cover={cover}
            />

            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    {!noHeader && <Header />}

                    {!noWrapper ? (
                        <Wrapper>
                            {template === "1col" ? (
                                <Main
                                    minHeight="calc(100vh - 56px)"
                                    size={mainWidth}
                                >
                                    {children}
                                </Main>
                            ) : (
                                children
                            )}
                        </Wrapper>
                    ) : (
                        children
                    )}

                    {!noHeader && <Footer />}
                </>
            )}
        </>
    )
}

interface PageProps extends HelmetProps {
    children?: any
    mainWidth?: "default" | "large" | "form"
    template?: "1col" | "2cols" | "3cols"
    isLoading?: boolean
    noWrapper?: boolean
    noHeader?: boolean
}
