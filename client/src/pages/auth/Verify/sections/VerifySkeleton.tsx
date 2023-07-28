/*=============================================== VerifySkeleton ===============================================*/

import { Page, Skeleton } from "components"

export const VerifySkeleton = () => {
    return (
        <Page title="Verification loading">
            <Skeleton height={60} width="60%" isShining />

            <Skeleton height={24} width="70%" isShining />
        </Page>
    )
}
