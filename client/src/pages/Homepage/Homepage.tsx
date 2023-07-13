/*=============================================== Homepage ===============================================*/

import { Image, Text } from "tsx-library-julseb"

import { Page } from "components"
import { HomeCover } from "pages/Homepage/HomeCover"
import { HomeSearch } from "pages/Homepage/HomeSearch"

import { SITE_DATA } from "data"

export const Homepage = () => {
    return (
        <Page title="Homepage" noHeader noWrapper>
            <HomeCover>
                <Image
                    src="/images/logo-white.svg"
                    alt={`Logo ${SITE_DATA.NAME}`}
                    width={100}
                />

                <Text tag="h1">
                    Book an artist / a band for your next event!
                </Text>

                <HomeSearch />
            </HomeCover>
        </Page>
    )
}
