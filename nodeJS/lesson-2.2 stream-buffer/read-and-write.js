const fs = require('fs')

// создание читающего потока
const readStream = fs.createReadStream('./docs/text.txt');
// создание пишущего потока
const writeStream = fs.createWriteStream('./docs/textNEW.txt')

// отображение того, как выглядят чанки большого файла
readStream.on('data', (chunk) => {
    console.log('------------')
    console.log(chunk) //.toString()
})

// вызываем readStream для text.txt и каждый раз после чтения чанка отправляем его в textNEW.txt
readStream.on('data', (chunk) => {
    writeStream.write('\nCHUNK START\n') // для наглядности
    writeStream.write(chunk)
    writeStream.write('\nCHUNK END\n') // для наглядности
})

