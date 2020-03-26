const AWS = require('aws-sdk');

const config = require('./config'); // load configurations file

AWS.config.update({
    accessKeyId: config.aws.key,
    secretAccessKey: config.aws.secret,
    region: config.aws.ses.region
});

const ses = new AWS.SES({apiVersion: '2010-12-01'});


const sendEmail = (to, subject, message, from) => {

    const params = {
        Destination: {
            ToAddresses: [to]
        },
        Source: from ? from : config.aws.ses.from.default,
        Template: "WelcomeEmail", 
        TemplateData: '{ \"name\":\"Dave\",\"verificationCode\":\"sdfgsgvsvsdf\",\"username\":\"DaveFromWoking\",\"password\":\"BigOne\",\"websiteName\":\"ShareMyTutoring\",\"domainName\":\"sharemytutoring.com\" }', 
        ReplyToAddresses: [
            config.aws.ses.from.default
        ],
    };

    ses.sendTemplatedEmail(params, (err, data) => {
        if (err) {
            return console.log(err, err.stack);
        } else {
            console.log("Email sent.", data);
        }
    });
};

sendEmail('dave@harmonydata.co.uk', "Hey! Welcome", "This is the body of email");

