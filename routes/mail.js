const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '8457ba53167e319754c5678891946b27-65b08458-46e160c5',
        domain: 'sandbox7c67e0137c1d4acc85436a162471ae09.mailgun.org'
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