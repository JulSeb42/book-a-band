/*=============================================== Error type ===============================================*/

import type { AxiosError } from "axios"

export type ErrorType<T> = AxiosError<T> | undefined
export type ErrorMessageType = ErrorType<{ message: string }>

export type ServerErrorType =
    | { response: { data: { message: string } } }
    | undefined
