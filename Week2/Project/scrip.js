/*Create a server that has at least 3 unique endpoints (examples: /movies, /actors)

Each endpoint should send back a different array of objects when tested.

Endpoints should follow the design principles of REST.
No frontend is required, the endpoints can be tested in the browser or in Postman by requesting to the localhost port.
** If you get stuck, review this Week’s material **/

const express = require("express")
const app = express();

const PORT = "3000"

let names = [
    {name: 'dylan'},
    {name: 'jack'},
    {name: 'forest'},
    {name: 'gump'}
]

let places = [
    {place: 'Alabama'},
    {place: 'Alaska'},
    {place: 'Arizona'},
    {place: 'Arkansas'}
]

let things = [
    {thing: 'sun glasses'},
    {thing: 'packing peanuts'},
    {thing: 'table'},
    {thing: 'piano'}
]

app.get("/names", (req, res) => {
    res.send(names)
})

app.get("/places", (req, res) => {
    res.send(places)
})

app.get("/things", (req, res) => {
    res.send(things)
})


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})
