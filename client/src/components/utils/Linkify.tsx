/*=============================================== Linkify ===============================================*/

import { Fragment } from "react"
import { uuid } from "ts-utils-julseb"

import { Text } from "components"
import type { TextProps } from "components/ui/Text/types"

const URL_REGEX =
    // eslint-disable-next-line
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

interface LinkifyProps extends TextProps {
    children?: string
}

export const Linkify = ({ children, ...rest }: LinkifyProps) => {
    const words: string[] = children ? children.split(" ") : []

    return (
        <Text {...rest}>
            {words?.map((word: string) =>
                word.match(URL_REGEX) ? (
                    <Fragment key={uuid()}>
                        <a
                            href={word}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {word}
                        </a>{" "}
                    </Fragment>
                ) : (
                    word + " "
                )
            )}
        </Text>
    )
}
