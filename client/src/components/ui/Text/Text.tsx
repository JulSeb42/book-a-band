/*=============================================== Text component ===============================================*/

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

export const Text = ({ tag, ...rest }: TextProps) => {
    if (tag === "h1") return <H1 {...rest} />

    if (tag === "h2") return <H2 {...rest} />

    if (tag === "h3") return <H3 {...rest} />

    if (tag === "h4") return <H4 {...rest} />

    if (tag === "h5") return <H5 {...rest} />

    if (tag === "h6") return <H6 {...rest} />

    if (tag === "strong") return <Strong {...rest} />

    if (tag === "em") return <Em {...rest} />

    if (tag === "small") return <Small {...rest} />

    if (tag === "ul") return <Ul {...rest} />

    return <P {...rest} />
}
