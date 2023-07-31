/*=============================================== Get date and time from ISO ===============================================*/

export const getDateFromIso = (date: Date): string => {
    let day: string | number = date.getDate()
    let month: string | number = date.getMonth() + 1
    let year: number = date.getFullYear()

    if (day < 10) {
        day = `0${day}`
    }

    if (month < 10) {
        month = `0${month}`
    }

    return `${year}-${month}-${day}`
}

export const getTimeFromIso = (date: Date) => {
    let hours: string | number = date.getHours()
    let minutes: string | number = date.getMinutes()

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}
