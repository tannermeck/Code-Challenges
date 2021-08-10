export function doubleNumbers(array) {
    return array.map(num => num * 2);
}

export function stringItUp(array) {
    return array.map((num) => num.toString())
}

export function capitalizeNames(array) {
    return array.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
}
export function namesOnly(arr) {
    return arr.map(object => object.name)
}
export function makeStrings(arr){
    return arr.map((object) => {
        if (object.age < 18){
            return object.name + " is under age!!"
        } else {
            return object.name + " can go to The Matrix"
        }
    })
}
export function readyToPutInTheDom(arr){
    return arr.map(object => {
        return `<h1>${object.name}</h1><h2>${object.age}</h2>`
    }  
    )
}