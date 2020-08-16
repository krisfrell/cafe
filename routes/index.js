const express = require('express');
const router = express.Router();

const Cart = require('../models/cart');
const Product = require('../models/product');
const Order = require('../models/order');

const sendEmail = require('../routes/mail');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/index', {title: 'Твое Кафе'});
});

router.get('/menu', function (req, res, next) {
    let successMsg = req.flash('success')[0];
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('pages/menu', {
            title: 'Меню',
            products: productChunks,
            successMsg: successMsg,
            noMessages: !successMsg
        });
    });
});

router.get('/menu/add-to-cart/:id', function (req, res, next) {
    let productId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if (err) {
            return res.redirect('/menu');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/menu');
    });
});

router.get('/reduce/:id', function (req, res, next) {
    let productId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function (req, res, next) {
    let productId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function (req, res, next) {
    if (!req.session.cart) {
        return res.render('pages/shopping-cart', {products: null});
    }
    let cart = new Cart(req.session.cart);
    res.render('pages/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice, commonPrice: cart.commonPrice});
});

router.get('/checkout', isLoggedIn, function (req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);
    let errMsg = req.flash('error')[0];
    res.render('pages/checkout', {total: cart.totalPrice, common:cart.commonPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/bla', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);

    var email = req.body.email;
    var subject = req.body.subject;

    var table = '<table id="tableOrder"  border="1">\n' +
        '   <tr>\n' +
        '    <th>Наименование</th>\n' +
        '    <th>Цена</th>\n' +
        '    <th>Количество</th>\n' +
        '    <th>Всего</th>\n';

    for (let i = 0; i < cart.showTitle().length; i++) {
            table += '<tr>\n' +
            '<td>' + cart.showTitle()[i] + '</td>\n' + '<td>' + cart.showPrice()[i] +'</td>' + '<td>' + cart.showQty()[i] + '</td>\n' + '<td>' + cart.showTotalPrice()[i] + '</td>\n' +
            '</tr>\n';
    }

    table += '</tr>\n' +
        '</table>';

    var text = '';
    var delivery = 99;
    if (cart.totalPrice < 1000) {
        text += req.body.text + table + '<hr>' + 'Доставка: 99 рублей ' + '<br>' + '<span>Общая сумма: </span>' + (cart.totalPrice + delivery);
    } else {
        text += req.body.text + table  + '<hr>' + '<span>Общая сумма: </span>' + cart.totalPrice;
    }


    let order = new Order({
        user: req.user,
        cart: cart
    });



    sendEmail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({message: 'Internal Error'});
        } else {
            order.save(function(err, result) {
                if (err) {
                    req.flash('error', err.message);
                    return res.redirect('/checkout');
                }
                req.session.cart = null;
                res.redirect('/');
                // console.log(order.items);
            });
            // req.session.cart = null;
            // res.redirect('/');
        }
    });
});

router.get('/about', function (req, res, next) {
    res.render('pages/about', {title: 'О кафе'});
});

router.get('/contacts', function (req, res, next) {
    res.render('pages/contacts', {title: 'О кафе'});
});

router.post('/email', function (req, res) {
    var email = req.body.email;
    var subject = req.body.subject;
    var text = req.body.text;
    console.log('Data: ', req.body);

    sendEmail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({message: 'Internal Error'});
        } else {
            res.json({message: 'Email sent'});
        }
    });
});

router.get('/send/:id', function (req, res) {
    alert('Сообщение отправлено');
    res.redirect('/');
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}
