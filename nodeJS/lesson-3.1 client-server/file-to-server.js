const http = require('http')
const fs = require('fs')

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('server request')
    console.log(req.url, req.method)
    fs.readFile('./_index.html', (error, data) => {
        res.setHeader('Content-Type', 'text/html')
        res.write(data)
        res.end()
    })
})

// указываем порт, который будет слушать наш сервер
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

//localhost:3000
