/*=============================================== EditAccountAvailabilities ===============================================*/

import type { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import {
    getToday,
    convertDateShort,
    deleteDuplicates,
    generateNumbers,
} from "ts-utils-julseb"

import {
    Text,
    Icon,
    Mixins,
    Datepicker,
    SkeletonCard,
    Skeleton,
} from "components"
import { sortDates } from "utils"

import type { EditAccountSectionProps } from "pages/account/EditAccount/sections/types"

interface EditAccountAvailabilitiesPros
    extends Omit<EditAccountSectionProps, "user"> {
    dates: string[]
    setDates: Dispatch<SetStateAction<string[]>>
}

export const EditAccountAvailabilities = ({
    isLoading,
    dates,
    setDates,
}: EditAccountAvailabilitiesPros) => {
    if (isLoading) return <EditAccountAvailabilitiesSkeleton />

    return (
        <>
            {dates.length ? (
                <>
                    {sortDates(deleteDuplicates(dates)).map(date => (
                        <DateLine
                            onClick={e =>
                                setDates(
                                    dates.filter(
                                        foundDate =>
                                            convertDateShort(
                                                new Date(foundDate)
                                            ) !==
                                            convertDateShort(
                                                new Date(
                                                    e.currentTarget.innerText
                                                )
                                            )
                                    )
                                )
                            }
                            key={date}
                        >
                            <IconContainer>
                                <Icon src="chevron-right" size={16} />
                            </IconContainer>

                            <StyledText>
                                {convertDateShort(new Date(date))}
                            </StyledText>

                            <IconContainer>
                                <Icon src="close" size={16} color="danger" />
                            </IconContainer>
                        </DateLine>
                    ))}
                </>
            ) : (
                <Text>You did not add any availability yet.</Text>
            )}

            <Datepicker
                label="Add a new date"
                onSelect={e => setDates([...dates, e.toString()])}
                onChange={e => setDates([...dates, e!.toString()])}
                placeholderText={getToday()}
                minDate={new Date(getToday())}
            />
        </>
    )
}

const DateLine = styled.button`
    text-align: left;
    padding: 0;
    border: none;
    background-color: transparent;
    ${Mixins.Flexbox({
        gap: "xxs",
    })}
`

const IconContainer = styled.span`
    height: 24px;
    border: 0;
    padding: 0;
    background-color: transparent;
    ${Mixins.Flexbox({
        alignItems: "center",
    })}
`

const StyledText = styled(Text)`
    flex-grow: 1;
`

const EditAccountAvailabilitiesSkeleton = () => {
    return (
        <>
            {generateNumbers(0, 4).map(n => (
                <SkeletonCard gap="xxs" alignItems="center" isShining key={n}>
                    <Skeleton width={16} height={16} />
                    <Skeleton width="40%" height={24} />
                </SkeletonCard>
            ))}

            <Datepicker label="Add a new date" isLoading onChange={() => {}} />
        </>
    )
}
