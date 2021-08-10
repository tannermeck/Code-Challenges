export function doubleNumbers(array) {
    return array.map(num => num * 2);
}

export function stringItUp(array) {
    return array.map(num => num.toString())
}

export function capitalizeNames(array) {
    let arr = []
   const firstLetter = array.map(name => name.slice(0,1).toUpperCase())
   const restName = array.map(name => name.slice(1).toLowerCase())
   const name1 = firstLetter[0].concat(restName[0])
   arr.push(name1)
   const name2 = firstLetter[1].concat(restName[1])
   arr.push(name2)
   const name3 = firstLetter[2].concat(restName[2])
   arr.push(name3)
   const name4 = firstLetter[3].concat(restName[4])
   arr.push(name4)
   return arr
    
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