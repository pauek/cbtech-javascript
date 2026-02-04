
let A = [2, 3, 5, 7, 11]

console.log(A.reduce((acum, x) => acum + x))
console.log(A.reduce((a, b) => Math.max(a, b)))
console.log(A.reduce((a, b) => Math.min(a, b)))

console.log(A.reduce((res, e) => [e, ...res], []))
console.log(A.reduce((obj, val, i) => ({ [`campo${i}`]: val, ...obj }), {}))