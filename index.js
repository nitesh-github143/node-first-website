var http = require('http')
var fs = require('fs');
// const { error } = require('console');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end();
        })
    }
    else if (req.url === '/about') {
        fs.readFile('./about.html', function (err, data) {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }
    else if (req.url === '/contact') {
        fs.readFile('./contact.html', function (err, data) {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }
    else {
        fs.readFile('404.html', function (err, data) {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }
})

app.listen(3000, () => {
    console.log('server started')
})