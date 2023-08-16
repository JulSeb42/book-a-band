/*=============================================== User service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

import type { FetchUsersType, SortType, UserRoleType } from "types"

class UserService {
    users(filters?: FetchUsersType) {
        const role = filters?.role || undefined
        const status =
            filters?.status &&
            (filters?.status !== "undefined" || filters?.status !== undefined)
                ? filters?.status
                : undefined
        const city =
            filters?.city && filters?.city !== "All" ? filters.city : undefined
        const genre =
            filters?.genre && filters?.genre !== "All"
                ? filters.genre
                : undefined
        const query = filters?.query || undefined
        const sort =
            filters?.sort &&
            (filters?.sort !== "undefined" || filters?.sort !== undefined)
                ? filters?.sort
                : undefined
        const verified =
            filters?.verified &&
            (filters?.verified !== "undefined" ||
                filters?.verified !== undefined ||
                filters?.verified !== null)
                ? filters.verified
                : undefined

        const params = [
            role ? `role=${role}` : undefined,
            status ? `status=${status}` : undefined,
            city ? `city=${city}` : undefined,
            genre ? `genre=${genre}` : undefined,
            query ? `query=${query}` : undefined,
            sort ? `sort=${sort}` : undefined,
            verified ? `verified=${verified}` : undefined,
        ]
            .filter(param => param !== undefined)
            .join("&")

        return http.get(`${SERVER_PATHS.USERS}/users?${params}`)
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

    allCities() {
        return http.get(`${SERVER_PATHS.USERS}/cities`)
    }

    allGenres() {
        return http.get(`${SERVER_PATHS.USERS}/genres`)
    }

    getUser(id: string) {
        return http.get(`${SERVER_PATHS.USERS}/user/${id}`)
    }

    approveArtist(id: string, data: { isApproved: boolean }) {
        return http.put(`${SERVER_PATHS.USERS}/approve-artist/${id}`, data)
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

    setUserRole(id: string, data: { role: UserRoleType }) {
        return http.put(`${SERVER_PATHS.USERS}/user-role/${id}`, data)
    }

    deleteAccount(id: string, data: { password: string }) {
        return http.put(`${SERVER_PATHS.USERS}/delete-account/${id}`, data)
    }
}

export const userService = new UserService()
