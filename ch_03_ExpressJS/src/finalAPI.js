const express = require('express');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.json()); // Middleware to parse JSON request body
app.use('/api/users', userRoutes); // Use userRoutes for all /api/users routes

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});