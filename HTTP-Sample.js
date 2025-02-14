
//
const http = require('http')

const myServer = http.createServer((req, res) => {
    res.write("Welcome to the first NodeJS Server");
    res.end();
}
)

myServer.listen(5500)