const AWS = require ('aws-sdk');
const config = require ('./config');
const welcome = require('./emailTemplates/SMT-welcomeEmail').welcomeEmail();
const usernameReminder = require('./emailTemplates/SMT-usernameReminder').usernameReminder();
const passwordReset = require('./emailTemplates/SMT_resetPassword').passwordReset();

AWS.config.update({
    accessKeyId: config.aws.key,
    secretAccessKey: config.aws.secret,
    region: config.aws.ses.region
});

// listTemplates
// createTemplates
// getTemplates
// deleteTemplates
// updateTemplates

const listTemplates = (ses, noOfItems) => {

    try {
        return new Promise ( (resolve, reject ) => {

            ses.listTemplates({MaxItems: noOfItems}, (err, data) => {
                if (err) {
                    reject (err.stack);
                } else {
                    const templateNames = data.TemplatesMetadata.map ( template => {
                        return (template.Name);
                    })
                    resolve (templateNames);
                }
            });
        })

    } catch (err) {
        console.log ('err');        
        console.log (err);        
    }
}

const getTemplate = (ses, templateName) => {

    try {
        return new Promise ( (resolve, reject ) => {

            ses.getTemplate({TemplateName: templateName}, (err, data) => {
                if (err) {
                    reject (err.stack);
                } else {
                    resolve (data);
                }
            });
        })

    } catch (err) {
        console.log ('err');        
        console.log (err);        
    }
}

const createTemplate = (ses, templateName, subjectLine, htmlContent, textContent) => {

    const params = {
        Template: {
            TemplateName: templateName,
            SubjectPart: subjectLine,
            HtmlPart: htmlContent,
            TextPart: textContent
        }
    };

    try {
        return new Promise ( (resolve, reject ) => {

            ses.createTemplate(params, (err, data) => {
                if (err) {
                    reject (err.stack);
                } else {
                    resolve (data);
                }
            });
        })

    } catch (err) {
        console.log ('err');        
        console.log (err);        
    }
}

const updateTemplate = (ses, templateName, subjectLine, htmlContent, textContent) => {

    const params = {
        Template: {
            TemplateName: templateName,
            SubjectPart: subjectLine,
            HtmlPart: htmlContent,
            TextPart: textContent
        }
    };

    try {
        return new Promise ( (resolve, reject ) => {

            ses.updateTemplate(params, (err, data) => {
                if (err) {
                    reject (err.stack);
                } else {
                    resolve (data);
                }
            });
        })

    } catch (err) {
        console.log ('err');        
        console.log (err);        
    }
}

const deleteTemplate = (ses, templateName) => {

    try {
        return new Promise ( (resolve, reject ) => {

            ses.deleteTemplate({TemplateName: templateName}, (err, data) => {
                if (err) {
                    reject (err.stack);
                } else {
                    resolve (data);
                }
            });
        })

    } catch (err) {
        console.log ('err');        
        console.log (err);        
    }
}

const processing = async () => {

    let res;
    try {
        
        const ses = new AWS.SES({apiVersion: '2010-12-01'});

        const noOfTemplaysToDisplay = 5;
        res = await listTemplates(ses, noOfTemplaysToDisplay);
        console.log ('List Names' );
        console.log (res);

        // res = await getTemplate(ses, 'SendUsername-20200505032842');
        // console.log ('Get Template' );
        // console.log (res);

        // const template  = welcome;
        // const template  = usernameReminder;
        const template  = passwordReset;

        res = await deleteTemplate(ses, template.templateName );
        console.log (res);

        console.log (`Template name : ${template.templateName}`);
        res = await createTemplate(ses, template.templateName, template.subjectPart, template.htmlPart, template.TextPart);
        console.log ('Get Template' );
        console.log (res);

        // res = await updateTemplate(ses, welcome.templateName, welcome.subjectPart, welcome.htmlPart, welcome.TextPart);
        // console.log ('Get Template' );
        // console.log (res);

    } catch (err) {
        console.log ('Err');
        console.log(err);
    }
}



processing ();

