/*=============================================== Toaster ===============================================*/

import { Toaster as HotToaster, ToastBar, resolveValue } from "react-hot-toast"
import styled from "styled-components"

import { ButtonIcon, COLORS, SPACERS, Text } from "components"
import { toast } from "utils"

export function Toaster() {
    return (
        <HotToaster
            position="bottom-right"
            toastOptions={{ duration: 2500 }}
            gutter={16}
            containerStyle={{ padding: 0 }}
        >
            {t => (
                <ToastBar
                    style={{
                        boxShadow: "none",
                        backgroundColor: COLORS.WHITE,
                        borderWidth: 2,
                        borderStyle: "solid",
                        width: "100%",
                        maxWidth: 300,
                        display: "flex",
                        gap: SPACERS.XS,
                        padding: SPACERS.S,
                    }}
                    position="bottom-right"
                    toast={t}
                >
                    {({ icon }) => (
                        <>
                            {icon}

                            <Content>{resolveValue(t.message, t)}</Content>

                            <ButtonIcon
                                icon="close"
                                onClick={() => toast.dismiss(t.id)}
                                size={32}
                                variant="transparent"
                            />
                        </>
                    )}
                </ToastBar>
            )}
        </HotToaster>
    )
}

const Content = styled(Text)`
    width: 100%;
`
