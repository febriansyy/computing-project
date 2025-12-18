const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));



const Product = require('./models/product');

require('dotenv').config();
const apiUrl = process.env.API_URL;

app.get(`${apiUrl}/products`, async (req, res) => {
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
})

app.post(`${apiUrl}/products`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: {
            type: Number,
            required: true
        },
    })

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct);
    })).catch((err) => {
        res.status(500).json({
            error: err, 
            success: false
        });
    });
})

mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'bwrsports-database'
})
.then(() => {
    console.log('Database connection is ready...');
})

app.listen(3000, () => {
    console.log('Server is running on port localhost:3000');
})