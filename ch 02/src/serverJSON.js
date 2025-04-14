const http = require('http');

const server = http.createServer((req,res) =>{
    const JSONTemplate = `
    {
        "name": "John Doe",
        "age": 30,
        "city": "New York"
    }`;
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(JSONTemplate));

});
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
}
);  