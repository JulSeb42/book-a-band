/*=============================================== Options Markdown to JSX ===============================================*/

import type { MarkdownToJSX } from "markdown-to-jsx"

import { Text } from "components"

export const optionsMarkdown: MarkdownToJSX.Options = {
    forceBlock: true,
    wrapper: "div",
    overrides: {
        h1: {
            component: Text,
            props: {
                tag: "h4",
            },
        },

        h2: {
            component: Text,
            props: {
                tag: "h4",
            },
        },

        h3: {
            component: Text,
            props: {
                tag: "h4",
            },
        },

        h4: {
            component: Text,
            props: {
                tag: "h4",
            },
        },

        h5: {
            component: Text,
            props: {
                tag: "h5",
            },
        },

        h6: {
            component: Text,
            props: {
                tag: "h6",
            },
        },

        p: {
            component: Text,
            props: {
                tag: "p",
            },
        },

        strong: {
            component: Text,
            props: {
                tag: "strong",
            },
        },

        em: {
            component: Text,
            props: {
                tag: "em",
            },
        },

        ul: {
            component: Text,
            props: {
                tag: "ul",
            },
        },

        small: {
            component: Text,
            props: {
                tag: "small",
            },
        },
    },
}
