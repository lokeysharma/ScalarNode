const mongoose = require('mongoose');

const userSchemaObj = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 6,
        validate: function () {
            return this.password === this.confirmPassword;
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}


const userSchema = new mongoose.Schema(userSchemaObj, { timestamps: true });
const UserModel = mongoose.model('Usermodel', userSchema);

module.exports = UserModel;