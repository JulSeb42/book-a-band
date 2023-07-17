/*=============================================== User service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

class UserService {
    allUsers() {
        return http.get(`${SERVER_PATHS.USERS}/all-users`)
    }

    allArtists(city?: string, genre?: string, query?: string) {
        return http.get(
            `${SERVER_PATHS.USERS}/artists?city=${city}&genre=${genre}&query=${query}`
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

    editAccount(id: string, data: any) {
        return http.put(`${SERVER_PATHS.USERS}/edit-account/${id}`, data)
    }

    editPassword(id: string, data: any) {
        return http.put(`${SERVER_PATHS.USERS}/edit-password/${id}`, data)
    }

    deleteAccount(id: string) {
        return http.delete(`${SERVER_PATHS.USERS}/delete-account/${id}`)
    }
}

export const userService = new UserService()
