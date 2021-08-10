export function doubleNumbers(array) {
    return array.map(num => num * 2);
}

export function stringItUp(array) {
    return array.map(num => num.toString())
}

export function capitalizeNames(array) {
   
     const lowerCase = array.map(name => name.toLowerCase())
     const upperCase = lowerCase.map(name => name.slice(0, 1).toUpperCase())
     const leftOver = lowerCase.map(name => name.slice(1))
     const name = leftOver.map(name => name)
     const capitalize = upperCase.map(character => character)
     return capitalize+name
    
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