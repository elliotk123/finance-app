const express = require('express')
const app = express()
const port = 3000
const file = require('./data/data.json')

app.get('/data', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.json(file);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))