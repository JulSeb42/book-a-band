/*=============================================== useKeyPress ===============================================*/

import { useEffect } from "react"

export function useKeyPress(
    callback: () => void,
    keyCodes: string[],
    disableShift?: boolean
): void {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (disableShift && e.shiftKey) return

            if (keyCodes?.length === 1 && keyCodes.includes(e.code)) {
                callback()
            } else {
                const metaKey =
                    keyCodes[0] === "Command" ? e.metaKey : undefined
                const ctrlKey =
                    keyCodes[0] === "Control" ? e.ctrlKey : undefined
                const shiftKey =
                    keyCodes[0] === "Shift" ? e.shiftKey : undefined
                const altKey = keyCodes[0] === "Alt" ? e.altKey : undefined
                if (
                    (metaKey || ctrlKey || shiftKey || altKey) &&
                    e.code === keyCodes[1]
                ) {
                    callback()
                }
            }
        }

        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [callback, keyCodes, disableShift])
}
