/*=============================================== SocialLink component ===============================================*/

import { Icon } from "components"

import { StyledSocialLink } from "components/media/SocialLink/styles"
import type { SocialLinkProps } from "components/media/SocialLink/types"

export const SocialLink = ({ url, site }: SocialLinkProps) => {
    return (
        <StyledSocialLink
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            $site={site}
        >
            <Icon src={site} size={32} />
        </StyledSocialLink>
    )
}
