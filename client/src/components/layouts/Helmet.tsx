/*=============================================== Helmet ===============================================*/

import { Helmet as Meta } from "react-helmet"

import { SITE_DATA } from "data"

export const Helmet = ({
    title,
    description = SITE_DATA.DESCRIPTION,
    keywords,
    cover = SITE_DATA.COVER,
}: HelmetProps) => {
    return (
        <Meta>
            <title>
                {title} | {SITE_DATA.NAME}
            </title>
            <link rel="icon" href={SITE_DATA.FAVICON} />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords?.join(",")} />
            <meta name="author" content={SITE_DATA.AUTHOR} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={SITE_DATA.TYPE} />
            <meta property="og:image" content={cover} />
            <meta property="og:site_name" content={SITE_DATA.NAME} />
            <meta property="og:locale" content={SITE_DATA.LANGUAGE} />

            <html lang={SITE_DATA.LANGUAGE} />
        </Meta>
    )
}

export interface HelmetProps {
    title: string
    description?: string
    keywords?: string[]
    cover?: string
}
