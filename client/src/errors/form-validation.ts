/*=============================================== Form validation texts ===============================================*/

import type { ColorsType } from "components/types"

export const FORM_VALIDATION = {
    ICON_PASSED: "check-circle",
    ICON_COLOR_PASSED: "success" as ColorsType,

    ICON_NOT_PASSED: "close-circle",
    ICON_COLOR_NOT_PASSED: "danger" as ColorsType,

    FULL_NAME_REQUIRED: "Full name is required.",
    EMAIL_REQUIRED: "Email is required.",
    PASSWORD_REQUIRED: "Password is required",
    PASSWORD_REGEX_NOT_PASSED:
        "Password must be at least 6 characters long and must contain at least one number, one lowercase and one uppercase letter.",
    CITY_REQUIRED: "City is required.",
}
