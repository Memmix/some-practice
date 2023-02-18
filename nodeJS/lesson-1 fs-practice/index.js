const fs = require('fs')

fs.readFile('./text.txt', 'utf-8', (error, data) => {
    fs.mkdirSync('./texts', () => { })
    fs.writeFileSync('./texts/text2.txt', `${data}\nПривет`, (error) => {
        error ? console.log(error) : null
    })
})

setTimeout(() => {
    if (fs.existsSync('./texts/text2.txt')) {
        fs.unlink('./texts/text2.txt', () => { })
    } else {
        console.log('файлика, который мы хотим удалить, не существует')
    }

}, 4500)

setTimeout(() => {
    if (fs.existsSync('./texts')) {
        fs.rmdir('./texts', () => { })
    } else {
        console.log('папка, которую мы хотим удалить, не существует')
    }
}, 7000)