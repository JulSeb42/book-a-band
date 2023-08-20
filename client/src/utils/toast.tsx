/*=============================================== Toast ===============================================*/

import { toast as hotToast, type ToastOptions } from "react-hot-toast"

import { COLORS, Icon } from "components"

export const toast = {
    success: (message: string, options?: ToastOptions) =>
        hotToast(message, {
            style: {
                borderColor: COLORS.SUCCESS,
                backgroundColor: COLORS.SUCCESS_GHOST,
                ...options?.style,
            },
            icon: <Icon src="check-circle" size={24} color="success" />,
            ...options,
        }),
    error: (message: string, options?: ToastOptions) =>
        hotToast(message, {
            style: {
                borderColor: COLORS.DANGER,
                backgroundColor: COLORS.DANGER_GHOST,
                ...options?.style,
            },
            icon: <Icon src="close-circle" size={24} color="danger" />,
            ...options,
        }),
    dismiss: (id?: string) => hotToast.dismiss(id),
}
