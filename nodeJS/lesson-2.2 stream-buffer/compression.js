// !компрессия файла:
const fs = require('fs')
const zlib = require('zlib')

const compress = () => {
    const gzip = zlib.createGzip()
    const input = fs.createReadStream('./docs/text.txt')
    const output = fs.createWriteStream('./docs/textCOMPRESSED.txt.gz')
    input.pipe(gzip).pipe(output)
}

compress()

