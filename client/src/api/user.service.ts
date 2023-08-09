/*=============================================== User service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

import type { SortType } from "types"

class UserService {
    allUsers() {
        return http.get(`${SERVER_PATHS.USERS}/all-users`)
    }

    allArtists({
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
