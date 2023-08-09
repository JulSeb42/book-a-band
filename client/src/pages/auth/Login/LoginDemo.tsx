/*=============================================== LoginDemo ===============================================*/

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext, type AuthContextType } from "context"
import { authService } from "api"

import { Button, Grid, Flexbox, Text } from "components"

import type { UserRoleType } from "types"

export const LoginDemo = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext) as AuthContextType

    const [isLoading, setIsLoading] = useState(false)

    const handleDemo = async (role: UserRoleType) => {
        setIsLoading(true)

        await authService
            .login({
                email: `julien@${role}.com`,
                password: import.meta.env.VITE_DEMO_PASSWORD,
            })
            .then(res => {
                loginUser(res.data.authToken)
                navigate(-1)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    return (
        <Flexbox flexDirection="column" gap="s">
            <Text tag="h4">Demo accounts</Text>

            <Grid col={2} gap="xs">
                <Button
                    onClick={() => handleDemo("user")}
                    isLoading={isLoading}
                >
                    Login as user
                </Button>

                <Button
                    onClick={() => handleDemo("artist")}
                    isLoading={isLoading}
                >
                    Login as artist
                </Button>
            </Grid>
        </Flexbox>
    )
}
