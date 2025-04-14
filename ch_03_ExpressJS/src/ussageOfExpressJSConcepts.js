const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';


app.get('/api/users', (req, res) => { 
    console.log('get apI WITH response' , req.body);
    res.status(200).json({ 
        message: 'hitting users api',
        status: 'success' });
});

app.post('/api/users', (req, res) => {
    console.log('post apI WITH response' , req.body);
    res.status(200).json({ 
        message: 'hitting users api post method',
        status: 'success',
        data: req.body
    });
});

app.put('/api/users', (req, res) => {
    console.log('put apI WITH response' , req.body);
    res.status(200).json({
        message: 'hitting users api put method',
        status: 'success',
        data: req.body
    });
});

app.use((req,res) => {
    res.json({
        message: 'No Data found and using default route',
        status: 'success'
    });
    console.log('No data found and using default route');
    next();
});


app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});