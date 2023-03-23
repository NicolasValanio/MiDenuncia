const sgMail = require('@sendgrid/mail');

const config = require('../config/dev');
sgMail.setApiKey("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")

module.exports = sgMail;