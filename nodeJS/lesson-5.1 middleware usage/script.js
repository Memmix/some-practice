const express = require('express')
const path = require('path')
const morgan = require('morgan')

const server = express()
server.set('view engine', 'ejs') //!

const PORT = 3000 //localhost:3000

const createPath = (page) => path.resolve(__dirname, 'pages-ejs', `${page}.ejs`)

server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

// *логирующий middleware*
// server.use((req, res, next) => {
//     console.log(`path: ${req.path}`) // инфа о пути
//     console.log(`method: ${req.method}`) // инфа о методе запроса
//     next()
// })

// *логирующий middleware с использованием morgan*
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// еще один middleware просто для теста
// server.use((req, res, next) => {
//     console.log('just test')
//     next() // убрать + добавить для демонстрации
// })

// middleware, который позволит сделать папку styles общедоступной
server.use(express.static('./pages-ejs/styles'))

server.get('/', (req, res) => {
    res.render(createPath('index'))
})
server.get('/posts/:id', (req, res) => { //чтобы передавать каждый раз уникальный пост 
    res.render(createPath('post'))
})
server.get('/add-post', (req, res) => {
    res.render(createPath('add-post'))
})
server.get('/posts', (req, res) => {
    res.render(createPath('posts'))
})
server.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'))
})
