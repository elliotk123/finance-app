const express = require('express')
const app = express()
const port = 3000
const file = require('./data/data.json')
const AWS = require('aws-sdk');
const awsCreds = require('./rootkey.json')


AWS.config.update({
    accessKeyId: awsCreds.AWSAccessKeyId,
    secretAccessKey: awsCreds.AWSSecretKey
  });

var s3 = new AWS.S3();
const params = {Bucket: 'www.connors-stag.com', Key: 'data.json'}

app.get('/data', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.json(file);
})

app.get('/dataOnline', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    s3.getObject(params, function(err, data) {
        if (err){
            console.log("ERROR!")
            console.log(err, err.stack); // an error occurred
        } else {
            res.send(data.Body);        // successful response
        }
    });
    
})

app.listen(port, () => console.log(`Listening on port ${port}!`))