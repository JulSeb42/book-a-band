/*=============================================== Homepage ===============================================*/

import { Page, Text, Logo } from "components"
import { HomeCover } from "pages/Homepage/HomeCover"
import { HomeSearch } from "pages/Homepage/HomeSearch"

export const Homepage = () => {
    return (
        <Page title="Homepage" noHeader noWrapper>
            <HomeCover>
                <Logo isWhite width={100} />

                <Text tag="h1" color="white" textAlign="center">
                    Book an artist / a band for your next event!
                </Text>

                <HomeSearch />
            </HomeCover>
        </Page>
    )
}
