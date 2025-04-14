const fs = require('fs');
const readLine = require('readline');
filedata = "";
fs.readFile('test01.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    filedata = data;
});

filedata = filedata + " Appended data";

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Entre the ata you  want to appent: ', (answer) => {
    filedata = filedata + answer;
    r1.close();
}
);

fs.writeFile('test01.txt', filedata, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Write operation complete.');
});