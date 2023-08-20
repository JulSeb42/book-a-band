/*=============================================== ConversationCard types ===============================================*/

import type { Dispatch, SetStateAction } from "react"

import type { ConversationType } from "types"

export interface ConversationCardProps {
    conversation: ConversationType
    setLoading: Dispatch<SetStateAction<boolean>>
}
