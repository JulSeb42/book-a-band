/*=============================================== SignupNav ===============================================*/

import { useSearchParams } from "react-router-dom"
import styled from "styled-components"

import type { RoleType } from "types"

export const SignupNav = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <NavContainer>
            <Button>As user</Button>
            <Button>As artist</Button>
        </NavContainer>
    )
}

const NavContainer = styled.nav``

const Button = styled.button``
