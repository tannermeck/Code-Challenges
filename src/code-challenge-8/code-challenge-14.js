//problem 5 of code-challenge 7:
export const isCapitalized = (str) => {
    const regex = str.match(/(\b[A-Z][a-z]+\b)/g)
    if (regex === null){
        return []
    } else {
    return regex;
}
}
//code challenge 8:
export const replaceZeros = (string) => {
    const regex = /(\b[0])/g
    const newString = string.replace(regex, 'zero')
    return newString;   
}
export const validatePin = (pin) => {
    const reg = /\d{4}/
    const test = reg.test(pin)
    return test
}
export const validateWord = (string) => {
    const reg = /\b\w{5,10}\b/
    const test = reg.test(string)
    return test
}
export const hasNumber = (string) => {
    const reg = /(\b[a-zA-Z]+[0-9]+\b)/
    const test = reg.test(string)
    return test
}
export const validateEmail = (email) => {
    const reg = /((\b\w\.)\w\b)/
    const test = reg.test(email)
    return test
}