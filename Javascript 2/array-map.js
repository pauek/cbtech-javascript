let A = [5, 4, 3, 2, 1]

console.log(A.map((x) => x + 1))
console.log(A.map((x) => `"${x}"`))
console.log(A.map((x) => "*".repeat(x)))

console.log(A.map((x, index) => `A[${index}] = ${x}`).join("\n"))

// Suma de un elemento y el anterior
let sumas = A.map((x, i, array) => (i == 0 ? x : x + array[i - 1]))
console.log(sumas)