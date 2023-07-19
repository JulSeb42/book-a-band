/*=============================================== Text component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { H1 } from "components/ui/Text/templates/H1"
import { H2 } from "components/ui/Text/templates/H2"
import { H3 } from "components/ui/Text/templates/H3"
import { H4 } from "components/ui/Text/templates/H4"
import { H5 } from "components/ui/Text/templates/H5"
import { H6 } from "components/ui/Text/templates/H6"
import { P } from "components/ui/Text/templates/P"
import { Strong } from "components/ui/Text/templates/Strong"
import { Em } from "components/ui/Text/templates/Em"
import { Small } from "components/ui/Text/templates/Small"
import { Ul } from "components/ui/Text/templates/Ul"

import type { TextProps } from "components/ui/Text/types"

export const Text = forwardRef(
    (
        { tag, ...rest }: TextProps,
        ref?: ForwardedRef<
            HTMLHeadingElement & HTMLParagraphElement & HTMLUListElement
        >
    ) => {
        if (tag === "h1") return <H1 ref={ref} {...rest} />

        if (tag === "h2") return <H2 ref={ref} {...rest} />

        if (tag === "h3") return <H3 ref={ref} {...rest} />

        if (tag === "h4") return <H4 ref={ref} {...rest} />

        if (tag === "h5") return <H5 ref={ref} {...rest} />

        if (tag === "h6") return <H6 ref={ref} {...rest} />

        if (tag === "strong") return <Strong ref={ref} {...rest} />

        if (tag === "em") return <Em ref={ref} {...rest} />

        if (tag === "small") return <Small ref={ref} {...rest} />

        if (tag === "ul") return <Ul ref={ref} {...rest} />

        return <P ref={ref} {...rest} />
    }
)
