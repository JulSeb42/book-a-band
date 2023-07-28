/*=============================================== Footer component ===============================================*/

import { Text, Flexbox, SocialLinksList } from "components"
import { ListCities } from "components/layouts/Footer/ListCities"
import { SITE_DATA } from "data"

import { StyledFooter } from "components/layouts/Footer/styles"

export const Footer = () => {
    return (
        <StyledFooter>
            <Flexbox flexDirection="column" alignItems="stretch" gap="xs">
                <Text tag="h3">{SITE_DATA.NAME}</Text>

                <Flexbox flexDirection="column" alignItems="stretch" gap="xxs">
                    <ListCities />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" alignItems="stretch" gap="xs">
                <Text tag="h3">Follow us</Text>

                <SocialLinksList
                    facebook={SITE_DATA.FACEBOOK}
                    instagram={SITE_DATA.INSTAGRAM}
                />
            </Flexbox>

            <Flexbox flexDirection="column" alignItems="stretch" gap="xs">
                <Text tag="h3">Disclaimer</Text>

                <Text>
                    This is a student project, and all data here is fake. If you
                    want to see more of my work,{" "}
                    <a
                        href={SITE_DATA.PORTFOLIO}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        check my portfolio here
                    </a>
                    !
                </Text>
            </Flexbox>
        </StyledFooter>
    )
}
