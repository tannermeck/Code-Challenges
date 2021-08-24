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
    stores.forEach(store => {
        for (let i = 0; i < store.length; i++){
            if (arr[i]){
            arr[i] += store[i]
            } else {
                arr[i] = store[i]
            }
        }

    })
    return arr
   
}
export function salesData(hours, data){
    const results = []
    for (let i = 0; i < hours.length; i++){     
            const obj = {
                sales: `${data[i]} cookies`,
                time: hours[i]
            }
            results.push(obj)
    }
    return results;
}