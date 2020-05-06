# template-ses_email_templates

## Introduction

This project conists of two files to load and test the email templates in AWS SES and several email templates.

createEmailTemplate
sendEmailTemplate

Directory emailTemplates with the following email templates in
- SMT_resetPassword
- SMT-usernameReminder
- SMT-welcomeEmail

## createEmailTemplate

This file uploads an email template to AWS SES. This email template is used to send clients specific emails.

## sendEmailTemplate

This file sends a test email to your specified email account.

## How I create Emails

Logon on to Stripo.email

Create email html

Click export - setup export to be sent to AWS SES.

Once the template exists in AWS. Run the createEmailtemplate script to list the template names.

Once you know the template name you can run the get command from createEmailTemplate to get ( Template name, SubjectPart, HTMLPart )

Copy this code into your new email template file.
