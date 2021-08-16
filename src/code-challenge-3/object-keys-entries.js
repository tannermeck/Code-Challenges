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
export function sortedArraysByValuesLength(obj){
    const entry = Object.entries(obj)
    const sort = entry.sort((a, b) => b[1].length - a[1].length)
    return sort

}
// CODE WARS
export function multiplyNumberToPower(array){
    const num = array[0]
    const power = array[1]
    return num**power
}
export function isUpperCase(string){
    if (string === string.toUpperCase()){
        return true 
    } return false
}