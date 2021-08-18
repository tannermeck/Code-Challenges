export function getHouses(array){
    return array.map(item => item.house)
    //Object.keys?
}
export function updateNumbers(object){
   const newObj = Object.keys(object)
   const values = Object.values(object)
   const newArray = newObj.map(key => key, values)
   return newArray; //FAILING
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

}
export function sortByChildren(arr){
    
}