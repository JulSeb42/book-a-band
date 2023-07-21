/*=============================================== Homepage ===============================================*/

import { Page, Text, Button } from "components"

export const Homepage = () => {
    const props = [
        "inline?: boolean",
        "col?: number | string",
        "gap?: SpacersTypes",
        "columnGap?: SpacersTypes",
        "rowGap?: SpacersTypes",
        "justifyItems?: GridJustifyItemsTypes",
        "alignItems?: GridAlignItemsTypes",
        "justifyContent?: GridJustifyContentTypes",
        "alignContent?: GridAlignContentTypes",
    ]

    return (
        <Page title="Homepage">
            <Text tag="h1">Hello World</Text>

            <ul>
                {props.map(prop => (
                    <li>${prop}</li>
                ))}
            </ul>

            <ul>
                {props.map(prop => {
                    const p = prop.split(":")[0].replace("?", "")
                    return <li>${p},</li>
                })}
            </ul>

            <ul>
                {props.map(prop => {
                    const p = prop.split(":")[0].replace("?", "")
                    return <li>{`${p}: $${p},`}</li>
                })}
            </ul>

            <ul>
                {props.map(prop => {
                    const p = prop.split(":")[0].replace("?", "")

                    return <li>{`$${p}={${p.replace("$", "")}}`}</li>
                })}
            </ul>

            <div>
                <Button onClick={() => alert("Hello")}>Hello</Button>
            </div>
        </Page>
    )
}
