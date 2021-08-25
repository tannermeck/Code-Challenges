export const sortByChildren = (charArray) => {
    const newArr = charArray.sort((a, b) => {
    const sortLength = a.children.length - b.children.length;
    if (a.children.length === b.children.length){
        return a.name - b.name;
    }
    return sortLength;
}
    )    
    return newArr;
};
export const containsW = (str) => {
    const obj = Object.entries(str).map(item => item[1])
    const newObj = obj.find(item => {
       return item === 'w'
    }
);
    if (newObj === 'w'){
        return true
    } else {
        return false
    }
};
export const isNum = (input) => {
    if (typeof(input) === 'string'){
        const newInput = Object.entries(input).map(item => item[1])
        console.log(typeof(newInput[1]))
        return newInput
    }
    if (typeof(input) === 'number'){
        return true
    } else {
        return false
    }
};
export const containsWorld = (input) => {
    const arr = input.split(" ")
    const filter = arr.find(item => {
        if (item === 'world'){
            return true
        } else {
            return false
        }
        })
        if (filter === 'world'){
            return true
        } else {
            return false
        }
};
export const isCapitalized = (str) => {
// first test passing
    const arr = []
    const split = str.split(" ")
    console.log(split.map(item => item.replace(' ')))
    const slice = split.map(item => {
        if (item.slice(0, 1) === item.slice(0, 1).toUpperCase()){
            arr.push(item)
        } else {
            return item
        }
    }
    )
    return arr
};
export const citiesAtoJ = (arr) =>{
    const array = []
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J']
    for (let i = 0; i < values.length; i++){
    arr.map(item => {
        if (item.slice(0, 1) === values[i]){
            array.push(item)
        } else {
            return item;
        }
    }
    )}
    console.log(array)
        return array
}