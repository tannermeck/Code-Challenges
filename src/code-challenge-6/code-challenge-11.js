export function returnTen(str){
    const slice = str.slice(-10)
    const map = Object.entries(slice).map(item => item[1])
    return map
}
export function findMax(matrix){
    const arr = []
    const filter = matrix.map(item => {
        return item.map(num => {
            return arr.push(num)   
        })
    })
    const sort = arr.sort((a, b)=> a - b)
    const number = sort.slice(sort.length - 1)
    return number[0]
}
export function totalSum(matrix){
    const arr = []
    const filter = matrix.map(item => {
        return item.map(num => {
            return arr.push(num)
            
        })
    })
    const reduce = arr.reduce((a, b) => a + b, 0)
    return reduce;
}
export function grandTotal(stores){
    const arr = []
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const newArr = values.map(num => num)
    const store = stores.map(item => item)
    console.log(store[0])
    console.log(newArr)
    const index = store[newArr]
    const add = newArr.reduce((a, b) => a + b, 0)
    arr.push(add)
    return arr
}