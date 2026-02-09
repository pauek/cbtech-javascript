// .js
// .cjs - CommonJS
// .mjs - ES Modules

// .jsx - JS con HTML dentro

// .ts
// .tsx

import circ from "./circle"
import { area as area2, circle } from "./circle"

console.log(circ.area(1))
console.log(circ.circle(1))

console.log(area2(2))
console.log(circle(2))

