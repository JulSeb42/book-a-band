/*=============================================== Footer component ===============================================*/

import { Text, Flexbox, uuid } from "tsx-library-julseb"

import { CityLinks } from "components/layouts/Footer/CityLinks"
import { SocialLink } from "components"

import { SITE_DATA } from "data"

import { StyledFooter } from "components/layouts/Footer/styles"
import type { SocialLinkType } from "types"

const links: SocialLinkType[] = [
    {
        site: "facebook",
        url: "#",
    },
    {
        site: "instagram",
        url: "#",
    },
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Flexbox flexDirection="column" gap="xs">
                <Text tag="h3">{SITE_DATA.NAME}</Text>

                <Flexbox
                    gap="xxs"
                    flexDirection="column"
                    padding={{ left: "xxs" }}
                >
                    <CityLinks />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="xs">
                <Text tag="h3">Follow us</Text>

                <Flexbox gap="xs">
                    {links.map(link => (
                        <SocialLink link={link} key={uuid()} />
                    ))}
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="xs">
                <Text tag="h3">Disclaimer</Text>
                <Text>
                    This is a student project, and all data here is fake. If you
                    want to see more of my work,{" "}
                    <a
                        href="https://julien-sebag.com/"
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
