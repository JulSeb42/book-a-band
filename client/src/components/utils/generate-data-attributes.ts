/*=============================================== Generate data attributes ===============================================*/

export const generateDataAttributes = (attribute: string, values: string[]) => {
    return values.map(
        value => `&[data-${attribute}="${value}"] { ${attribute}: ${value}; }`
    )
}
