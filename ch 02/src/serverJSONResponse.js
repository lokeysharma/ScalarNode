const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((req, res) => {

    const JSONTemplate =
    {
        id: 10,
        name: "lokesh sharma",
        age: 30,
        city: "New Dedhi",
        createdAt: new Date()
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if ( req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'public', 'HTML', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                console.log("Error Reading HTML FIle", err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
            else {
                res.write(data);
                console.log("showinf Web pages.")
                res.end();
            }
        });
    }

    else if (req.url === '/CSS/style.css'){
        res.setHeader('content-Type', 'text/css');
        fs.readFile(path.join(__dirname,'public','CSS','style.css'), 'utf8',(err,data) => {
            if(err){
                console.log("Error getting file", err);
                res.statusCode = 500;
                res.end('Internal Server error');
            }
            else{
                res.write(data);
                res.end();
            }
        });
    }
    else {
        res.end(JSON.stringify(JSONTemplate));
        console.log("returhn json string for this.")
    }

});
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
}
);
