export function capitalizeObjectKeys(obj){
    const key = Object.keys(obj)
    return key.map(item => item.toUpperCase())
}
export function sortKeys(obj){
    const keys = Object.keys(obj)
    return keys.sort((a, b) => a.length - b.length)
}
export function getFilteredKey(obj){
    const keys = Object.keys(obj)
    const value = keys.filter(item => item === 'age')
    return value
}
export function getArrayOfKeysAndValues(obj){
    const object = Object.entries(obj)
    return object
}