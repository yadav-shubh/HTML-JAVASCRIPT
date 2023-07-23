let arr = Array.from("2323723294")
let arr1 = arr.filter((number) => {
    return number % 2 == 0;
})

let arr2 = arr.map((value) => {return value * value})
console.log(arr2)