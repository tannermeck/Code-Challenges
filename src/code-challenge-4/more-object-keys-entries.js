export function getHouses(array){
    const house = array.map(item => {
        return item.house
    })
    return house;
}
export function updateNumbers(object){
        return Object.entries(object).map(item => {
            return item.join(': ')
        })
    }

export function totalCharacters(arr){
    const name = arr.map(item => item.name)
    let spouseLength = 0
    arr.map(item => {
        if (item.spouse === null){
            spouseLength += 0;
        } else {
            spouseLength += 1;
        } return spouseLength;
    })
    const children = arr.map(item => item.children)
    const child = children.map(arr => arr.length)
    const sum = child.reduce(function(a, b){
        return a + b;
    }, 0);
    return name.length + spouseLength + sum;
}
export function hasChildrenEntries(arr, character) {
    for(let item of arr){
        if (item.name === character){
            if (item.children.length > 0)
            return true
        } else {
            
        } return false;
    }
}
export function sortByChildren(arr){
    const sortChildren = arr.sort((a, b)=> a.children.length - b.children.length)
    console.log(sortChildren)
    return sortChildren;
}