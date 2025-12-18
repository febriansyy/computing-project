const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    countInStock: Number,
});

exports.Products = mongoose.model('Product', productSchema);