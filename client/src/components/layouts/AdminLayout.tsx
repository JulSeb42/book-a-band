/*=============================================== AdminLayout ===============================================*/

import { Main, Page, Text } from "components"
import { DashboardNav } from "components/layouts/DashboardNav"

import type { PageProps } from "components/layouts/Page"

type AdminLayoutProps = Omit<
    PageProps,
    "noWrapper" | "noHeader" | "noMain" | "mainSize" | "error"
>

export function AdminLayout({
    title,
    description,
    keywords,
    children,
}: AdminLayoutProps) {
    return (
        <Page
            title={title}
            description={description}
            keywords={keywords}
            noMain
        >
            <DashboardNav />

            <Main>
                <Text tag="h1">{title}</Text>

                {children}
            </Main>
        </Page>
    )
}
