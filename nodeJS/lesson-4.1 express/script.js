const express = require('express') // подключение express
const path = require('path') // подключение path

const server = express() // вызов express 

const PORT = 3000

// функция, определения пути до файла
const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)

//базовая прослушка сервера
server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

//базовая имплементация роутинга на express
server.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})
server.get('/page1', (req, res) => {
    res.sendFile(createPath('page1'))
})
server.get('/page2', (req, res) => {
    res.sendFile(createPath('page2'))
})
server.get('/page3', (req, res) => {
    res.redirect('/page2')
})
server.use((req, res) => {
    res.status(404).sendFile(createPath('error'))
})




