const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const { PORT, MONGO_DB_USER,  MONGO_DB_PASSWORD,MONGO_URI} = process.env;


mongoose.connect(MONGO_URI).then((connections) => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(err);
});


app.use(express.json());


app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
