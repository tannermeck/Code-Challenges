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