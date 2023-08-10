/*=============================================== AdminLayout ===============================================*/

import { Main, Aside, Page } from "components"

import type { PageProps } from "components/layouts/Page"

type AdminLayoutProps = Omit<
    PageProps,
    "noWrapper" | "noHeader" | "noMain" | "mainSize" | "error"
>

export const AdminLayout = ({
    title,
    description,
    keywords,
    children,
}: AdminLayoutProps) => {
    return (
        <Page
            title={title}
            description={description}
            keywords={keywords}
            noMain
        >
            <Aside></Aside>

            <Main>{children}</Main>
        </Page>
    )
}
