// преобразующий поток 
// основной кейс этого потока - сжатие

const fs = require('fs')
const zlib = require('zlib')

// создание читающего потока
const readStream = fs.createReadStream('./docs/text.txt');
// создание пишущего потока
const writeStream = fs.createWriteStream('./docs/textNEW.txt')
// создание сжимающего потока
const compressStream = zlib.createGzip()

const handleError = () => {
    console.log('error!')
    readStream.destroy() //уничтожаем читающий поток
    writeStream.end('finished with error') //добавляем в пишущий поток, что произошла ошибка
}

// duplex stream - читаем из readStream и передаем в writeStream
readStream
    .on('error', handleError) //если ошибка произойдет во время чтения
    .pipe(compressStream) // данные, которые мы прочитали, будут сжиматься
    .pipe(writeStream) // записываться в файл будут уже сжатые данные
    .on('error', handleError) //если ошибка произойдет во время записи