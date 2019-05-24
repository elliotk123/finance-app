const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/data', router);
app.listen(port, () => console.log(`Listening on port ${port}!`));