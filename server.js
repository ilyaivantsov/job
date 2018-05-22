// содежимое index.js /usr/lib/node_modules
const fs = require('fs');
const http = require('http')
const port = 8544

const requestHandler = (request, res) => {
    console.log(request.url)
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    fs.createReadStream('index.html').pipe(res);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})