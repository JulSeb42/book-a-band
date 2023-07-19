/*=============================================== Page ===============================================*/

import type { ReactNode } from "react"

import { Wrapper, Main } from "components"
import { Helmet } from "components/layouts/Helmet"

import type { HelmetProps } from "components/layouts/Helmet"
import type { MainSizesTypes } from "components/layouts/Main/types"

export const Page = ({
    children,
    title,
    description,
    cover,
    keywords,
    noWrapper,
    noHeader,
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

            {noWrapper ? (
                children
            ) : (
                <Wrapper>
                    <Main size={mainSize}>{children}</Main>
                </Wrapper>
            )}
        </>
    )
}

interface PageProps extends HelmetProps {
    children?: ReactNode | ReactNode[]
    noWrapper?: boolean
    noHeader?: boolean
    mainSize?: MainSizesTypes
}
