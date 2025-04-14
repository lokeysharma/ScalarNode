const http = require('http');


const server = http.createServer((req,res) =>{

    const HTMLTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <h1>Hello World</h1>
    </body>
    </html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end(HTMLTemplate);

});

const port = 3000;
const host = 'localhost';
server.listen(port,host,() =>{
    console.log(`Server is running at http://${host}:${port}`);
});