/*=============================================== ButtonIcon component ===============================================*/

import {
    forwardRef,
    type ForwardedRef,
    useState,
    useRef,
    useEffect,
} from "react"
import { Link } from "react-router-dom"

import { Icon, Loader } from "components"

import {
    StyledButtonIcon,
    ButtonContainer,
    Label,
} from "components/ui/ButtonIcon/styles"
import type { ButtonIconProps } from "components/ui/ButtonIcon/types"

export const ButtonIcon = forwardRef(
    (
        {
            as,
            icon,
            color = "primary",
            variant = "plain",
            size = 32,
            isLoading,
            disabled,
            type = "button",
            to,
            blank,
            label,
            showLabel,
            ...rest
        }: ButtonIconProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [isLabelVisible, setIsLabelVisible] = useState(false)
        const [labelWidth, setLabelWidth] = useState(0)
        const [labelHeight, setLabelHeight] = useState(0)

        const labelRef = useRef<HTMLSpanElement>(null)

        useEffect(() => {
            if (label && labelRef?.current) {
                setLabelWidth(labelRef.current.offsetWidth)
                setLabelHeight(labelRef.current.offsetHeight)
            }
        }, [label, labelRef])

        const buttonFn = () => (
            <StyledButtonIcon
                ref={ref}
                as={as ? as : to ? Link : "button"}
                disabled={isLoading || disabled}
                type={type}
                to={to}
                target={blank ? "_blank" : null}
                rel={blank ? "noreferrer noopener" : null}
                aria-label={label}
                $variant={variant}
                $color={color}
                $size={size}
                {...rest}
            >
                {isLoading ? (
                    <Loader size={size * 0.7} color="gray" />
                ) : (
                    <Icon src={icon} size={size * 0.7} />
                )}
            </StyledButtonIcon>
        )

        if (label && showLabel)
            return (
                <ButtonContainer
                    onMouseEnter={() => setIsLabelVisible(true)}
                    onMouseLeave={() => setIsLabelVisible(false)}
                >
                    <Label
                        ref={labelRef}
                        $isVisible={isLabelVisible}
                        $buttonSize={size}
                        $width={labelWidth}
                        $height={labelHeight}
                    >
                        {label}
                    </Label>

                    {buttonFn()}
                </ButtonContainer>
            )

        return buttonFn()
    }
)
