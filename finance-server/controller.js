const AWS = require('aws-sdk');
const awsCreds = require('./rootkey.json');

AWS.config.update({
    accessKeyId: awsCreds.AWSAccessKeyId,
    secretAccessKey: awsCreds.AWSSecretKey
});

var s3 = new AWS.S3();

exports.getDataController = (req, res) => {
    const params = {Bucket: 'www.connors-stag.com', Key: 'data.json'}
    s3.getObject(params, function(err, data) {
        if (err){
            console.log(err, err.stack); // an error occurred
        } else {
            res.send(data.Body);        // successful response
        }
    });
}