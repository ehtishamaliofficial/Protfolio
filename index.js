const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('template2.html')
const fileContentcss = fs.readFileSync('template2.css')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'contect-type': 'text-html' });
    res.end(fileContent)
    res.end(fileContentcss)
})
server.listen(80, '127.0.0.1', () => {
    console.log("Listen the port 80")
})