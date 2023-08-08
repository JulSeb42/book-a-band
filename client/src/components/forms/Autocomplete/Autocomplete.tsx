/*=============================================== Autocomplete component ===============================================*/

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
    type KeyboardEvent,
} from "react"
import Fuse from "fuse.js"
import { uuid } from "ts-utils-julseb"

import {
    InputContainer,
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
} from "components/forms/InputComponents"
import { InputContent } from "components/forms/Input/styles"

import {
    StyledAutocomplete,
    StyledInput,
    List,
    ListItem,
} from "components/forms/Autocomplete/styles"
import type { AutocompleteProps } from "components/forms/Autocomplete/types"

export const Autocomplete = ({
    options,
    value,
    setValue,
    id,
    label,
    helper,
    isLoading,
    icon,
    validation,
    setValidation,
    ...rest
}: AutocompleteProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const [cursor, setCursor] = useState<number>(-1)

    const listRef = useRef<HTMLDivElement>(null)

    const handleFocus = () => {
        setIsOpen(true)
        setIsFocus(true)
    }

    const handleBlur = () =>
        setTimeout(() => {
            setIsOpen(false)
            setIsFocus(false)
        }, 100)

    const fuse = new Fuse(options)
    const results = fuse
        .search(value)
        ?.slice(0, 20)
        .map(option => option.item)

    const handleKeyNavigation = useCallback(
        (e: KeyboardEvent) => {
            if (isOpen) {
                if (e.key === "ArrowDown") {
                    e.preventDefault()

                    if (results.length) {
                        setCursor(prevState =>
                            prevState < results?.length ? prevState + 1 : 0
                        )

                        if (cursor === results?.length) {
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

                    if (results?.length) {
                        const newCursor = (prevState: number) =>
                            prevState > 0 ? prevState - 1 : results?.length

                        setCursor(prevState => newCursor(prevState))

                        if (newCursor(cursor) <= 1) {
                            listRef?.current?.scrollTo({
                                top: 0,
                            })
                        } else if (newCursor(cursor) === 0) {
                            listRef?.current?.scrollTo({
                                top: listRef?.current?.scrollHeight,
                            })
                        } else {
                            listRef?.current?.scrollTo({
                                top: newCursor(cursor) * 40,
                            })
                        }
                    }
                }

                if (e.key === "Tab") {
                    if (isFocus && cursor !== -1) {
                        e.preventDefault()

                        setValue(results[cursor])
                        handleBlur()
                    }
                }
            }
        },
        [cursor, isOpen, results, setValue, isFocus]
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setValue(value)

        if (setValidation && validation?.status) {
            if (!value.length) setValidation("not-passed")
            else setValidation("passed")
        }
    }

    useEffect(() => {
        window.addEventListener("keypress", () => handleKeyNavigation)
    }, [handleKeyNavigation, isFocus, value.length])

    return (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            validation={validation}
            isLoading={isLoading}
        >
            <StyledAutocomplete $isOpen={isOpen}>
                <InputContent>
                    {icon && <InputIcon icon={icon} />}

                    <StyledInput
                        id={id}
                        value={value}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={e => handleKeyNavigation(e)}
                        $validation={validation?.status}
                        $hasIcon={!!icon}
                        {...rest}
                    />

                    {validation && (
                        <InputRightContainer>
                            <InputValidationIcon status={validation.status} />
                        </InputRightContainer>
                    )}
                </InputContent>

                <List $isOpen={isOpen && !!value.length} ref={listRef}>
                    {results.length ? (
                        results.map(option => (
                            <ListItem
                                onClick={() => setValue(option)}
                                $isActive={value === option}
                                $isHovered={cursor === results.indexOf(option)}
                                key={uuid()}
                            >
                                {option}
                            </ListItem>
                        ))
                    ) : (
                        <ListItem
                            $isActive={false}
                            $isHovered={false}
                            $isReadOnly
                        >
                            Your search did not return any result
                        </ListItem>
                    )}
                </List>
            </StyledAutocomplete>
        </InputContainer>
    )
}
