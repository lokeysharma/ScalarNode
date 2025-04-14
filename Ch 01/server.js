const http = require('http');
const fs = require('fs');

filedata = "";
fs.readFile('test01.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    filedata = data;
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(filedata);
  res.end('Hello World\n');
});

const PORT = process.env.PORT || 7000;
const HOST = '0.0.0.0';
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
})