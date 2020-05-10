var nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

var mailerHbs = require('nodemailer-express-handlebars');

const auth = {
    auth: {
        api_key: '8457ba53167e319754c5678891946b27-65b08458-46e160c5',
        domain: 'sandbox7c67e0137c1d4acc85436a162471ae09.mailgun.org'
    }
};

var mailer = nodemailer.createTransport(auth);

mailer.use('compile', mailerHbs({
    viewPath: 'pages/email',
    extName: '.hbs'
}));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'krisfrell@yandex.ru',
        subject,
        text
    };

    mailer.sendMail(mailOptions, function (err, data) {
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