// const express = require('express');
// const router = express.Router();
// const csrf = require('csurf');
// const passport = require('passport');
//
// const Order = require('../models/order');
// const Cart = require('../models/cart');
//
// const csrfProtection = csrf();
// router.use(csrfProtection);
//
// router.get('/profile', isLoggedIn, function (req, res, next) {
//     Order.find({user: req.user}, function(err, orders) {
//         if (err) {
//             return res.write('Error!');
//         }
//         let cart;
//         orders.forEach(function(order) {
//             cart = new Cart(order.cart);
//             order.items = cart.generateArray();
//         });
//         res.render('user/profile', { orders: orders });
//     });
// });
//
// router.get('/logout', isLoggedIn, function (req, res, next) {
//     req.logout();
//     res.redirect('/');
// });
//
// router.use('/', notLoggedIn, function (req, res, next) {
//     next();
// });
//
// router.get('/signup', function (req, res, next) {
//     let messages = req.flash('error');
//     res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
// });
//
// router.post('/signup', passport.authenticate('local.signup', {
//     failureRedirect: '/user/signup',
//     failureFlash: true
// }), function (req, res, next) {
//     if (req.session.oldUrl) {
//         let oldUrl = req.session.oldUrl;
//         req.session.oldUrl = null;
//         res.redirect(oldUrl);
//     } else {
//         res.redirect('/user/profile');
//     }
// });
//
// router.get('/signin', function (req, res, next) {
//     let messages = req.flash('error');
//     res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
// });
//
// router.post('/signin', passport.authenticate('local.signin', {
//     failureRedirect: '/user/signin',
//     failureFlash: true
// }), function (req, res, next) {
//     if (req.session.oldUrl) {
//         var oldUrl = req.session.oldUrl;
//         req.session.oldUrl = null;
//         res.redirect(oldUrl);
//     } else {
//         res.redirect('/user/profile');
//     }
// });
//
// module.exports = router;
//
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// }
//
// function notLoggedIn(req, res, next) {
//     if (!req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// }

var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var Order = require('../models/order');
const Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn,function (req, res, next) {
    Order.find({user: req.user}, function(err, orders) {
        if (err) {
            return res.write('Error!');
        }
        let cart;
        orders.forEach(function(order) {
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/profile', {title: 'Профиль', orders: orders });
    });
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function (req, res, next) {
    next();
});

router.get('/signup', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', {title: 'Регистрация', csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', {title: 'Вход', csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}