/* 
    2 strings
    1 boolean
    1 array
    1 number
    An ID - unique identifier. Use the uuid package to generate unique IDs.
*/

const { v4: uuidv4 } = require('uuid');

const aryData = [
    {
        title: "Fruits",
        description: "A fruit is a mature, ripened ovary, along with the contents of the ovary.",
        items: ["Apple", "Banana", "Cantaloupe"],
        totalAmount: 23,
        _id: uuidv4()
    }
]

module.exports = aryData;