const mangoose = require('mongoose');

const productSchema = new mangoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return this.price > 0;
            },
            message: 'Price must be greater than 0'
        }
    },
    description: {
        type: [String],
        required: true,
        trim: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    discount: {
        type: Number,
        default: 0,
        min: 0
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    stock: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return this.stock >= 0;
            },
            message: 'Stock cannot be negative'
        }
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
});

const ProductModel = mangoose.model('ProductModel', productSchema);
module.exports = ProductModel;