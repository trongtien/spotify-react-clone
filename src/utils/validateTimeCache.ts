
export const TIME_VALID_MAX = Object.freeze({
    ONE_HOUSE: 3600000
})

export const isClearTimeCache = (timeCurrent: number | null, timeMax: number): boolean => {
    if(timeCurrent === null) return true
    
    const currentMinisecond = Date.now()
    const timeLoadCurrent = currentMinisecond - timeCurrent

    return timeLoadCurrent >= timeMax ? true : false
}