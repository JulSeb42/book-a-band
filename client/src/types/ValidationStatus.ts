/*=============================================== Validation status ===============================================*/

const validationStatus = {
    passed: "passed",
    "not-passed": "not-passed",
} as const

export type ValidationStatusType = keyof typeof validationStatus
