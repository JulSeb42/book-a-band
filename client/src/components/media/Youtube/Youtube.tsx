/*=============================================== Youtube component ===============================================*/

import { convertYoutube } from "ts-utils-julseb"

import { StyledYoutube } from "components/media/Youtube/styles"
import type { YoutubeProps } from "components/media/Youtube/types"

export const Youtube = ({ src, title }: YoutubeProps) => {
    return (
        <StyledYoutube
            src={convertYoutube(src)}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    )
}
