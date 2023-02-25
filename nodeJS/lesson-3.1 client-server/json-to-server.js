const http = require('http')

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('server request')
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        { name: 'Иван', age: 30 },
        { name: 'Анатолий', age: 40 }
    ])

    //поскольку мы возвращаем данные, а не разметку, которую нужно отобразить в браузере,
    //созданный JSON напрямую передаётся в метод http.end()
    res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

