export function howMuchPencil(string){
    for (let step = 0; step < string.length; step++){
        const newString = string.slice(-(string.length - 1))
        console.log(newString)
        return newString;
    }
}
    // for (let character of newString){
    //     arr.push(character)
    //     console.log(arr)
    // }
    // return arr
    // let stringLength = string.length
    // while (stringLength === 0){
    //     const arr = [];
    //     const word = string
    //     arr.push(word);
    //     if (stringLength !== 0){
    //     const slice = string.slice(-(string.length - 1))
    //     arr.push(slice);
    //     console.log(arr) 
    //     return arr    
    //     } 
    // }

export function wordsToCharList(arr){
        const obj = Object.entries(arr)
        const newObj = obj.map(item => item[1])
        return newObj
}
export function listFoods(arr){
    const forEach = arr.ingredients.map(item => {
        const newItem = (item.split(' '))
        const items = (newItem.slice(2))
        const joinItems = (items.join(' '))
        return joinItems
    })
    return forEach
}
export function stepActions(arr){
    const item = arr.steps.map(item => {
        const splitItem = item.split(' ').slice(0, 1).join(' ')
        return splitItem
    })
    return item
}
export function removeLastCharacter(str, numberOfCharacters){
    if (numberOfCharacters <= 0){
        return str
    } else {
    const slice = str.slice(0, str.length - numberOfCharacters)
    return slice
}
}