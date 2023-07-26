/*=============================================== TextIcon component ===============================================*/

import { Text, Icon, Flexbox } from "components"
import { getIconSize } from "components/ui/TextIcon/get-icon-size"

import { IconContainer } from "components/ui/TextIcon/styles"
import type { TextIconProps } from "components/ui/TextIcon/types"

export const TextIcon = ({
    tag,
    icon,
    iconColor = "gray",
    ...rest
}: TextIconProps) => {
    return (
        <Flexbox alignItems="flex-start" gap="xxs">
            <IconContainer $height={getIconSize(tag || "p") * 1.5}>
                <Icon
                    src={icon}
                    color={iconColor}
                    size={getIconSize(tag || "p")}
                />
            </IconContainer>

            <Text tag={tag} {...rest} />
        </Flexbox>
    )
}
