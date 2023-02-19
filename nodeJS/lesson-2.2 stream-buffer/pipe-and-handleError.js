const fs = require('fs')

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/textNEW.txt')

//если в момент чтения данных происходит ошибка, то уничтожаем читающий поток,
//т.к. поврежденные файлы передавать не следует
const handleError = () => {
    console.log('error!')
    readStream.destroy() //уничтожаем читающий поток
    writeStream.end('finished with error') //добавляем в пишущий поток, что произошла ошибка
}
//duplex stream - читаем из readStream и передаем в writeStream
readStream
    .on('error', handleError) //если ошибка произойдет во время чтения
    .pipe(writeStream)
    .on('error', handleError) //если ошибка произойдет во время записи