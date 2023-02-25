const http = require('http')

const PORT = 3000;


// коллбэк функция будет вызываться каждый раз, когда кто-то обращается к серверу
// req (request) - запрос
// res (response) - ответ
const server = http.createServer((req, res) => { // создание сервера
    console.log('server request')
    console.log(req.url, req.method)

    // указываем тип данных для ответа
    res.setHeader('Content-Type', 'text/html')
    // записываем какой-то ответ
    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<h1>hi</h1>')
    res.write('<h2>hi</h2>')
    // сообщает, что все нужные данные добавлены в ответ, который будет отправлен и контроль можно возвращать браузеру
    res.end()
})

// указываем порт, который будет слушать наш сервер
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

//localhost:3000
