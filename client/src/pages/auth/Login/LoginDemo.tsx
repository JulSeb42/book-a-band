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
    const isLocalhost = import.meta.env.VITE_DEV_ENV === "local"

    const handleDemo = async (role: UserRoleType, email?: string) => {
        setIsLoading(true)

        await authService
            .login({
                email: email || `julien@${role}.com`,
                password:
                    role === "admin"
                        ? import.meta.env.VITE_PASSWORD_ADMIN
                        : import.meta.env.VITE_DEMO_PASSWORD,
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

            <Grid col={isLocalhost ? 3 : 2} gap="xs">
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

                {isLocalhost && (
                    <Button
                        onClick={() =>
                            handleDemo(
                                "admin",
                                import.meta.env.VITE_EMAIL_ADMIN
                            )
                        }
                        isLoading={isLoading}
                    >
                        Login as admin
                    </Button>
                )}
            </Grid>
        </Flexbox>
    )
}
