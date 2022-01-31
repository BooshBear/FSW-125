let req = require("./math")

// req(number 1, number 2) --->
let num = new req(1, 2)
console.log("Addition: " + num.add(1, 1))
console.log("Subtraction: " + num.sub(6, 3))
console.log("Multiplication: " + num.mul(4, 2))
console.log("Division: " + num.div(5, 2))
