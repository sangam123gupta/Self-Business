const User = require("../model/auth_model");

exports.user_by_id = (req, res, next, id) => {

    User.findById(id).exec((er, user) => {
        if (er)
            console.log("error findone method", er);
        else {
            req.profile = user;
            next();
        }
    })

}