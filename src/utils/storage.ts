import {StorageEnum} from "../types/enum";

export const getItem = <T>(key: StorageEnum): T | null => {
    let value = null
    const result = window.localStorage.getItem(key)
    if (result) {
        value = JSON.parse(result)
    }
    return value
}

export const setItem = <T>(key: StorageEnum, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
}