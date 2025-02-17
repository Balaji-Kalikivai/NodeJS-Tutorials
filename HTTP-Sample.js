
//
const http = require('http')

const myServer = http.createServer((req, res) => {
    res.write("Welcome to the NodeJS Server");
    res.end();
}
)


const { addNumber, subtractNumber, multiplyNumber, divideNumber } = require('./localDemoModule');

console.log(addNumber(10, 5));
console.log(subtractNumber(10, 5));
console.log(multiplyNumber(10, 5));
console.log(divideNumber(10, 5));


myServer.listen(5500)