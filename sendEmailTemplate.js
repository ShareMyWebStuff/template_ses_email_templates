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
            resetCode: '67890',
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
    TutorSeekersWelcomeEmail: {
        to: 'dave@harmonydata.co.uk',
        source: '"sharemytutoring.com" <noreply@sharemytutoring.com>',
        Template: "TutorSeekers_WelcomeEmail",
        TemplatedataObj: {
            name: 'Dave',
            verificationCode: '12345',
            email: 'support@tutorseekers.co.uk',
            password: 'Sybase01',
            websiteName: 'TutorSeekers',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@tutorseekers.co.uk'
        }
    },
    TutorSeekersCoUkWelcomeEmail: {
        to: 'dave@harmonydata.co.uk',
        source: '"tutorseekers.co.uk" <noreply@tutorseekers.co.uk>',
        Template: "TutorSeekersCoUk_WelcomeEmail",
        TemplatedataObj: {
            name: 'Dave',
            verificationCode: '12345',
            email: 'support@tutorseekers.co.uk',
            password: 'Sybase01',
            websiteName: 'TutorSeekers',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@tutorseekers.co.uk'
        }
    },
    TutorSeekersCoUkPasswordReset: {
        to: 'dave@harmonydata.co.uk',
        source: '"tutorseekers.co.uk" <noreply@tutorseekers.co.uk>',
        Template: "TutorSeekersCoUk_PasswordReset",
        TemplatedataObj: {
            name: 'Dave',
            resetCode: '67890',
            websiteName: 'TutorSeekers',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@tutorseekers.co.uk'
        }
    },
    WelcomeTest: {
        to: 'dave@harmonydata.co.uk',
        source: '"sharemytutoring.com" <noreply@sharemytutoring.com>',
        Template: "WelcomeEmail-20201130023735",
        TemplatedataObj: {
            name: 'Dave',
            verificationCode: '12345',
            email: 'support@tutorseekers.co.uk',
            password: 'Sybase01',
            websiteName: 'TutorSeekers',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@tutorseekers.co.uk'
        }
    },
    TutorSeekersCoUkReference: {
        to: 'dave@harmonydata.co.uk',
        source: '"tutorseekers.co.uk" <noreply@tutorseekers.co.uk>',
        Template: "tutorSeekersCoUk_referenceEmail",
        TemplatedataObj: {
            refereesName: 'Mr Adbul',
            tutorsName: 'Julie Smith',
            websiteName: 'TutorSeekers',
            domainName: 'http://localhost:3000',
            supportEmail: 'support@tutorseekers.co.uk',
            verificationCode: '12345'
        }
    },


    
};


const ses = new AWS.SES({apiVersion: '2010-12-01'});

const sendTemplateEmail = ( ses, params ) => {

    console.log ('PARAMS');
    console.log (params);

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

    try {
        
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
        console.log (JSON.stringify(params));

        const res = await sendTemplateEmail( ses, params );
        console.log (res);

        // ses.sendTemplatedEmail(params, (err, data) => {
        //     if (err) {
        //         return console.log(err, err.stack);
        //     } else {
        //         console.log("Email sent.", data);
        //     }
        // });

    } catch (err) {
        console.log ('ERROR - ERROR')
        console.log (err);
    }

};


// sendEmail(templateTest['SMT_Welcome']);
// sendEmail(templateTest['SMT_UsernameReminder']);
// sendEmail(templateTest['SMT_PasswordReset']);

// sendEmail(templateTest['Sendusername']);

sendEmail(templateTest['TutorSeekersCoUkWelcomeEmail']);
// sendEmail(templateTest['TutorSeekersCoUkPasswordReset']);
// sendEmail(templateTest['TutorSeekersCoUkReference']);

// sendEmail(templateTest['WelcomeTest']);


