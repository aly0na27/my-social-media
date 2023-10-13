export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "This field must be filled in!"
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return "Max length is exceeded"
    }
    return undefined
}