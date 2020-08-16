const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'api_key',
        domain: 'domain'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, html, cb) => {
    const mailOptions = {
        from: email,
        to: 'krisfrell@yandex.ru',
        subject,
        html
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            // console.log('Error Occurs');
            cb(err, null);
        } else {
            // console.log('Message sent');
            cb(null, data);
        }
    });
}

module.exports = sendMail;
