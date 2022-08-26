const uuid=require("uuidv1");
const crypto = require("crypto");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const auth_schema = new Schema(
    {
        name: {
            type: String,
            maxlength: 40,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique:true,
            trim:true
            
        },
        hs_password: {
            type: String,
            maxlength: 50,
            required: true,
            trim: true
        },
        salt: String,
        about: {
            type: String,
            trim: true,
        },
        role: {
            type: Number,
            default: 0
        },
        history: {
            type: Array,
            default: []
        }
    }, { timestamps: true });


auth_schema.virtual("password").get(function(){
    console.log("irt", this.irt);
    return this._password;
}).set(function (password)  {
    this.salt = uuid();
    this._password = password;
    this.hs_password = encrypted_password(password)
})

auth_schema.methods = {
    isAuthenticated:function(plane_password){
        console.log("password through body",plane_password);
        return this.encrypted_password(plane_password)==this.hs_password
    },
    encrypted_password: function (password) {
        if (!password) {
            return "";
        }
        try {
            return crypto.createHash("sha1", this.salt).update(password).digest('hex');
        }
        catch (e) {
            console.log("error in catch", e)
        }
    }
}

function encrypted_password(password) {
    if (!password) {
        return "";
    }
    try {
        return crypto.createHash("sha1", this.salt).update(password).digest('hex');
    }
    catch (e) {
        console.log("error in catch", e)
    }
}

module.exports = new mongoose.model('users', auth_schema);
