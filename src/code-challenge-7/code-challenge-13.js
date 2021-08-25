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