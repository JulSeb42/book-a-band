/*=============================================== User service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

import type { SortType, UserRoleType, AdminApproveStatusType } from "types"

class UserService {
    allUsers({
        role,
        isApproved,
    }: {
        role?: UserRoleType | "all" | undefined
        isApproved?: AdminApproveStatusType | undefined
    }) {
        const getRole = () => {
            if (role === null) return null
            if (role === undefined) return null
            if (role === "all") return null
            return role
        }

        return http.get(
            `${SERVER_PATHS.USERS}/all-users?${
                getRole() !== null ? `role=${getRole()}` : ""
            }${isApproved !== undefined ? `?isApproved=${isApproved}` : ""}`
        )
    }

    artists({
        city,
        genre,
        query,
        sort,
    }: {
        city?: string
        genre?: string
        query?: string
        sort?: SortType
    }) {
        return http.get(
            `${SERVER_PATHS.USERS}/artists?city=${city}&genre=${genre}&query=${query}&sort=${sort}`
        )
    }

    artistsAdmin({
        isApproved,
    }: {
        isApproved: "true" | "false" | "undefined"
    }) {
        return http.get(
            `${SERVER_PATHS.USERS}/artists-admin?isApproved=${isApproved}`
        )
    }

    approveArtist(id: string, data: { isApproved: boolean }) {
        return http.put(`${SERVER_PATHS.USERS}/approve-artist/${id}`, data)
    }

    allCities() {
        return http.get(`${SERVER_PATHS.USERS}/cities`)
    }

    allGenres() {
        return http.get(`${SERVER_PATHS.USERS}/genres`)
    }

    getUser(id: string) {
        return http.get(`${SERVER_PATHS.USERS}/user/${id}`)
    }

    editAccount(
        id: string,
        data: {
            fullName: string
            genre: string
            price: number
            bio: string
            facebookUrl: string
            instagramUrl: string
            youtubeUrl: string
            isVisible: boolean
            avatar: string
            youtubeLinks: string[]
            city: string
            available: string[]
        }
    ) {
        return http.put(`${SERVER_PATHS.USERS}/edit-account/${id}`, data)
    }

    editPassword(
        id: string,
        data: {
            oldPassword: string
            newPassword: string
        }
    ) {
        return http.put(`${SERVER_PATHS.USERS}/edit-password/${id}`, data)
    }

    deleteAccount(id: string, data: { password: string }) {
        return http.put(`${SERVER_PATHS.USERS}/delete-account/${id}`, data)
    }
}

export const userService = new UserService()
