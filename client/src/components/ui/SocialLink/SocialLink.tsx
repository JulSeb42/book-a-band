/*=============================================== SocialLink component ===============================================*/

import { Icon } from "tsx-library-julseb"

import { StyledSocialLink } from "components/ui/SocialLink/styles"
import type { SocialLinkProps } from "components/ui/SocialLink/types"

export const SocialLink = ({ link: { site, url } }: SocialLinkProps) => {
    return (
        <StyledSocialLink
            data-site={site}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
        >
            <Icon src={site} size={32} />
        </StyledSocialLink>
    )
}
