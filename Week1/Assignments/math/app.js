let req = require("./math")

// req(number 1, number 2) --->
let num = new req(1, 2)
console.log("Addition: " + num.add());
console.log("Subtraction: " + num.sub());
console.log("Multiplication: " + num.mul());
console.log("Division: " + num.div());
