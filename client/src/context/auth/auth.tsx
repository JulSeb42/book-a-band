/*=============================================== Auth context ===============================================*/

import { useState, useEffect, createContext, type ReactNode } from "react"
import { authService, userService } from "api"
import type { AuthContextType } from "context/types"

import type { UserType } from "types"

interface AuthProviderWrapperProps {
    children: ReactNode | ReactNode[]
}

export const AuthContext = createContext<null | AuthContextType>(null)

export function AuthProviderWrapper({ children }: AuthProviderWrapperProps) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState<null | UserType>(null)

    const loginUser = (token: string) => {
        localStorage.setItem("authToken", token)
        verifyStoredToken()
    }

    const setToken = (token: string) => {
        localStorage.setItem("authToken", token)
        setIsLoggedIn(true)
    }

    const logoutUser = () => {
        localStorage.removeItem("authToken")
        setIsLoggedIn(false)
        setUser(null)
    }

    const verifyStoredToken = async () => {
        const storedToken = localStorage.getItem("authToken")

        if (storedToken) {
            return await authService
                .loggedIn({
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                })
                .then(async res => {
                    const user: UserType = res.data.user
                    return await userService
                        .getUser(user._id)
                        .then(res => {
                            setUser(res.data)
                            setIsLoggedIn(true)
                            setIsLoading(false)
                        })
                        .catch(err => {
                            console.log(err)
                            setIsLoggedIn(false)
                            setUser(null)
                            setIsLoading(false)
                        })
                })
                .catch(err => {
                    console.log(err)
                    setIsLoggedIn(false)
                    setUser(null)
                    setIsLoading(false)
                })
        } else {
            setIsLoggedIn(false)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        verifyStoredToken()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                isLoading,
                user,
                setUser,
                loginUser,
                logoutUser,
                setToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
