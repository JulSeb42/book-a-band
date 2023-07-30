/*=============================================== Sort dates ===============================================*/

export const sortDates = (dates: string[]) =>
    dates.sort((a, b) => (new Date(a) < new Date(b) ? -1 : 0))
