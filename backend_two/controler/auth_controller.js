const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const Latest = require("../model/auth_model");
const expressJwt = require('express-jwt')  // for authorization check
//  npm i express-jwt@5.3.1

require("dotenv").config();


exports.signup = (req, res) => {

    console.log("user data", req.body);
    Latest.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            return res.status(400).json({ error: "email is already  taken" });
        } else {
            const auth = new Latest(req.body);
            auth.save((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: 'email is taken',
                        er: err
                    })
                } else {
                    console.log("hello from signout backend two");
                    user.hs_password = undefined;
                    user.salt = undefined;
                    res.status(200).json({
                        user
                    })
                }
            })
        }
    })
}

exports.signin = (req, res) => {
    const schema = require("../model/auth_model");
    const email = req.body.email;
    const body_password = req.body.password;
    schema.findOne({ email }, (err, user) => {
        if (err) {
            res.status(403).json({ error: "user is not found this email" });
        } else {
            if (!user.isAuthenticated(body_password)) {
                res.status(403).json({ error: "password is incorrect" });
            } else {
                console.log("hello from signin backend two");
                const token = jwt.sign({ _id: user._id }, process.env.SECRET);
                res.cookie('tokn', token, { expire: new Date() + 9999 })
                res.status(200).json({ token })

            }
        }
    })

}

exports.signout = (req, res) => {
    console.log("hello from signout backend two");
    res.clearCookie('tokn');
    res.status(200).json({ response: "successfully logout" });


}

exports.requireSignin = expressJwt({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
});

exports.isAuth = (req, res, next) => {

    let user = req.auth && req.profile && req.auth._id == req.profile._id
    if (user) {
        next();
    } else {
        res.status(400).json({ error: 'user not access' });
    }

}

exports.is_admin = (req, res, next) => {
    if (req.profile.role === 0) {
        res.status(400).json({
            error: 'you are not admin'
        })
    } else {
        next();
    }
}