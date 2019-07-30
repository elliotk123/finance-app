const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, "192.168.1.66", () => console.log(`Example app listening on port ${port}!`))