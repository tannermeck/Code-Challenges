export function fiveAndGreaterOnly(arr) {
   return arr.filter(item => item > 5)
}
export function evensOnly(arr) {
   return arr.filter(item => item % 2 === 0)
}
export function fiveCharactersOrFewerOnly(arr) {
   const newArr = arr.filter(item => item.length <= 5)
   return newArr;
}
export function peopleWhoBelongToTheIlluminati(arr){
   return arr.filter(item => item.member === true)
}
export function ofAge(arr){
   return arr.filter(item => item.age > 18)
}