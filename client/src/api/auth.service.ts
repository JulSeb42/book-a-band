/*=============================================== Auth service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

import type { UserRoleType } from "types"

class AuthService {
    signup(data: {
        fullName: string
        email: string
        password: string
        city: string
        role: UserRoleType
    }) {
        return http.post(`${SERVER_PATHS.AUTH}/signup`, data)
    }

    login(data: { email: string; password: string }) {
        return http.post(`${SERVER_PATHS.AUTH}/login`, data)
    }

    loggedIn(data: {
        headers: {
            Authorization: string
        }
    }) {
        return http.get(`${SERVER_PATHS.AUTH}/loggedin`, data)
    }

    verify(data: { id: string }) {
        return http.put(`${SERVER_PATHS.AUTH}/verify`, data)
    }

    forgotPassword(data: { email: string }) {
        return http.post(`${SERVER_PATHS.AUTH}/forgot-password`, data)
    }

    resetPassword(data: { password: string; resetToken: string; id: string }) {
        return http.put(`${SERVER_PATHS.AUTH}/reset-password`, data)
    }
}

export const authService = new AuthService()
