/*=============================================== Modal component ===============================================*/

import { useEffect } from "react"

import { useKeyPress } from "hooks"

import { StyledModal } from "components/layouts/Modal/styles"
import type { ModalProps } from "components/layouts/Modal/types"

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
    useEffect(() => {
        const { body } = document

        const stopClass = "stop-scrolling"

        if (isOpen) body.classList.add(stopClass)
        else body.classList.remove(stopClass)
    }, [isOpen])

    useKeyPress(() => {
        if (isOpen) setIsOpen(false)
    }, ["Escape"])

    return <StyledModal $isOpen={isOpen}>{children}</StyledModal>
}
