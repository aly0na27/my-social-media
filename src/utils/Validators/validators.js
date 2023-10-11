export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "Required"
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return "Max length is exceeded"
    }
    return undefined
}