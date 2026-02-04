let array1 = [1, 2, 3, 4, 5]
const array2 = [10, 20, 30, 40, 50]
array2[0] = 30
array1 = []

// array2 --------> [10, 20, 30, 40, 50]

console.log(array1)
console.log(array2)