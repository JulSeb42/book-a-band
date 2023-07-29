/*=============================================== EditAccountAvailabilities ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import { Text } from "components"

import type { EditAccountSectionProps } from "pages/account/EditAccount/sections/types"

interface EditAccountAvailabilitiesPros extends EditAccountSectionProps {
    dates: string[]
    setDates: Dispatch<SetStateAction<string[]>>
}

export const EditAccountAvailabilities = ({
    user,
    isLoading,
    dates,
    setDates,
}: EditAccountAvailabilitiesPros) => {
    if (isLoading) return <EditAccountAvailabilitiesSkeleton />

    if (!dates.length) return <Text>You did not add any availability yet.</Text>

    return <></>
}

const EditAccountAvailabilitiesSkeleton = () => {
    return <></>
}
