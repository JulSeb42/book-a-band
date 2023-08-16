/*=============================================== Select component ===============================================*/

import {
    forwardRef,
    useState,
    useRef,
    useEffect,
    useCallback,
    type ForwardedRef,
    type KeyboardEvent,
} from "react"

import { Icon } from "components"
import {
    InputContainer,
    InputRightContainer,
} from "components/forms/InputComponents"
import { useClickOutside } from "hooks"

import {
    StyledSelect,
    SelectButton,
    List,
    Option,
} from "components/forms/Select/styles"
import type { SelectProps } from "components/forms/Select/types"

export const Select = forwardRef(
    (
        {
            label,
            helper,
            value,
            setValue,
            options,
            isLoading,
            setIsLoading,
        }: SelectProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        const [isListOpen, setIsListOpen] = useState(false)

        const containerRef = useRef<HTMLDivElement>(null)
        useClickOutside(containerRef, () => setIsListOpen(false))

        const listRef = useRef<HTMLDivElement>(null)
        const [cursor, setCursor] = useState<number>(0)
        const [isFocus, setIsFocus] = useState(false)

        const handleOpen = () => {
            setIsFocus(true)
            setIsListOpen(true)
        }

        const handleClose = () =>
            setTimeout(() => {
                setIsFocus(false)
                setIsListOpen(false)
            }, 100)

        const handleKeyNavigation = useCallback(
            (e: KeyboardEvent) => {
                if (isListOpen) {
                    if (e.key === "ArrowDown") {
                        e.preventDefault()

                        if (options.length) {
                            const newCursorPosition =
                                options.indexOf(value) === options.length - 1
                                    ? 0
                                    : cursor + 1

                            setCursor(newCursorPosition)

                            setValue(options[newCursorPosition])

                            if (cursor === options.length - 1) {
                                listRef?.current?.scrollTo({
                                    top: 0,
                                })
                            } else {
                                listRef?.current?.scrollTo({
                                    top: cursor * 40,
                                })
                            }
                        }
                    }

                    if (e.key === "ArrowUp") {
                        e.preventDefault()

                        if (options) {
                            const newCursorPosition =
                                options.indexOf(value) <= 0
                                    ? options.length - 1
                                    : cursor - 1

                            setCursor(newCursorPosition)

                            setValue(options[newCursorPosition])

                            if (newCursorPosition <= 1) {
                                listRef?.current?.scrollTo({
                                    top: 0,
                                })
                            } else if (cursor === 0) {
                                listRef?.current?.scrollTo({
                                    top: listRef?.current?.scrollHeight,
                                })
                            } else {
                                listRef?.current?.scrollTo({
                                    top: cursor * 40,
                                })
                            }
                        }
                    }

                    if (e.key === "Tab") {
                        e.preventDefault()

                        setValue(options[cursor])
                        handleClose()
                    }
                }
            },
            [cursor, isListOpen, options, setValue, value]
        )

        useEffect(() => {
            window.addEventListener("keypress", () => handleKeyNavigation)

            if (isFocus && options.length) {
                handleOpen()
            } else {
                handleClose()
            }
        }, [handleKeyNavigation, isFocus, options.length])

        return (
            <InputContainer label={label} helper={helper} isLoading={isLoading}>
                <StyledSelect ref={containerRef} $isOpen={isListOpen}>
                    <SelectButton
                        type="button"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        ref={ref}
                        onKeyDown={handleKeyNavigation}
                    >
                        {value}
                    </SelectButton>

                    <InputRightContainer>
                        <Icon src="chevron-down" size={16} color="primary" />
                    </InputRightContainer>

                    <List $isOpen={isListOpen} ref={listRef}>
                        {options.map((option, i) => (
                            <Option
                                onClick={() => {
                                    setValue(option)
                                    if (setIsLoading) setIsLoading(true)
                                }}
                                $isActive={option === value}
                                key={`option-${i}`}
                            >
                                {option}
                            </Option>
                        ))}
                    </List>
                </StyledSelect>
            </InputContainer>
        )
    }
)
