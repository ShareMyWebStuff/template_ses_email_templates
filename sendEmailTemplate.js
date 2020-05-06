const AWS = require('aws-sdk');

const config = require('./config'); // load configurations file

// AWS.config.update({
//     accessKeyId: config.aws.key,
//     secretAccessKey: config.aws.secret,
//     region: config.aws.ses.region
// });
AWS.config.update({
    region: config.aws.ses.region
});

const templateTest = {
    SMT_Welcome: {
        to: 'dave@harmonydata.co.uk',
        source: '"sharemytutoring.com" <noreply@sharemytutoring.com>',
        Template: "SMT_WelcomeEmail",
        TemplatedataObj: {
            name: 'Dave',
            verificationCode: '12345',
            username: 'Username',
            password: 'Sybase01',
            websiteName: 'ShareMyTutoring',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@sharemytutoring.com'
        }
    },
    SMT_UsernameReminder: {
        to: 'dave@harmonydata.co.uk',
        source: '"sharemytutoring.com" <noreply@sharemytutoring.com>',
        Template: "SMT_UsernameReminder",
        TemplatedataObj: {
            websiteName: 'ShareMyTutoring',
            usernames: '- DadFromSurbiton',
            htmlUsernames: '- DadFromSurbiton<br>',
            supportEmail: 'support@sharemytutoring.com',
            name: 'Dave'
        }
    },
    SMT_PasswordReset: {
        to: 'dave@harmonydata.co.uk',
        source: '"sharemytutoring.com" <noreply@sharemytutoring.com>',
        Template: "SMT_PasswordReset",
        TemplatedataObj: {
            name: 'Dave',
            verificationCode: '12345',
            resetCode: '67890',
            username: 'Username',
            password: 'Sybase01',
            websiteName: 'ShareMyTutoring',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@sharemytutoring.com'
        }
    },
    Sendusername: {
        to: 'dave@harmonydata.co.uk',
        source: '"sharemytutoring.com" <noreply@sharemytutoring.com>',
        Template: "SendUsername-20200505032843",
        TemplatedataObj: {
        }
    },

};


const ses = new AWS.SES({apiVersion: '2010-12-01'});

const sendTemplateEmail = ( ses, params ) => {
    return new Promise ( ( resolve, reject) => {
        ses.sendTemplatedEmail(params, (err, data) => {
            if (err) {
                console.log ('err');
                console.log(`err.message : ${err.message}`);
                reject( err.message);
            } else {
                resolve(data);
            }
        });
    });
}


// const sendEmail = async (to, subject, message, from) => {
const sendEmail = async (template) => {

    const params = {
        Destination: {
            ToAddresses: [template.to]
        },
        Source: template.source,
        Template: template.Template, 
        TemplateData: JSON.stringify(template.TemplatedataObj), 
        ReplyToAddresses: [
            template.source
        ],
    };

    console.log (params);

    const res = await sendTemplateEmail( ses, params );
    console.log (res);

    // ses.sendTemplatedEmail(params, (err, data) => {
    //     if (err) {
    //         return console.log(err, err.stack);
    //     } else {
    //         console.log("Email sent.", data);
    //     }
    // });
};


// sendEmail('dave@harmonydata.co.uk', "Hey! Welcome", "This is the body of email");

// sendEmail(templateTest['SMT_Welcome']);
// sendEmail(templateTest['SendUsername-20200505032843']);
// sendEmail(templateTest['SMT_UsernameReminder']);
sendEmail(templateTest['SMT_PasswordReset']);
// sendEmail(templateTest['Sendusername']);


