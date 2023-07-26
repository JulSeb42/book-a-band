/*=============================================== Page ===============================================*/

import type { ReactNode } from "react"

import { Wrapper, Main } from "components"
import { Helmet } from "components/layouts/Helmet"
import { Header } from "components/layouts/Header"

import type { HelmetProps } from "components/layouts/Helmet"
import type { MainSizesTypes } from "components/layouts/Main/types"

interface PageProps extends HelmetProps {
    children?: ReactNode | ReactNode[]
    noWrapper?: boolean
    noHeader?: boolean
    noMain?: boolean
    mainSize?: MainSizesTypes
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
                    {!noMain ? (
                        <Main size={mainSize}>{children}</Main>
                    ) : (
                        children
                    )}
                </Wrapper>
            )}
        </>
    )
}
