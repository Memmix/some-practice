const express = require('express')
const path = require('path')
const morgan = require('morgan')

const server = express()
server.set('view engine', 'ejs')

const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'pages-ejs', `${page}.ejs`)

server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
server.use(express.urlencoded({ extended: false }))
server.use(express.static('./pages-ejs/styles'))

// !использование метода post
server.post('/add-post', (req, res) => {
    // res.send(req.body)
    const { title, author, text } = req.body
    const post = {
        id: new Date(),
        date: new Date().toLocaleDateString(),
        author,
        title,
        text
    }
    res.render(createPath('post'), { post })
})
server.get('/', (req, res) => {
    res.render(createPath('index'))
})
server.get('/posts/:id', (req, res) => {
    const post = {
        id: '1',
        text: 'hello world',
        title: 'title',
        date: '11.03.2023',
        author: 'J.',
        likes: 31,
        dislikes: 10,
        comments: 0
    }
    res.render(createPath('post'), { post })
})
server.get('/add-post', (req, res) => {
    res.render(createPath('add-post'))
})
server.get('/posts', (req, res) => {
    const posts = [
        {
            id: '1',
            text: 'hello world',
            title: 'post title',
            date: '11.03.2023',
            author: 'J.',
            likes: 31,
            dislikes: 10,
            comments: 0
        },
        {
            id: '2',
            text: 'hfasdfad',
            title: 'post title',
            date: '11.03.2023',
            author: 'J.',
            likes: 31,
            dislikes: 10,
            comments: 0
        }
    ]
    res.render(createPath('posts'), { posts })
})
server.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'))
})
