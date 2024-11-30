import * as process from 'process';

export const env = {
    emailServiceID: process.env['NG_APP_EMAIL_SERVICE_ID'],
    emailTemplateID: process.env['NG_APP_EMAIL_TEMPLATE_ID'],
    emailUserID: process.env['NG_APP_EMAIL_USER_ID'],
};
