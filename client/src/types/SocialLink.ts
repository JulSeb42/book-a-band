/*=============================================== Social link type ===============================================*/

const sites = {
    instagram: "instagram",
    facebook: "facebook",
    youtube: "youtube",
} as const

export type SocialSitesType = keyof typeof sites

export type SocialLinkType = {
    site: SocialSitesType
    url: string
}
