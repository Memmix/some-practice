// !декомпрессия файла:
const fs = require('fs')
const zlib = require('zlib')

const decompress = () => {
    const unzip = zlib.createUnzip()
    const input = fs.createReadStream('./docs/textCOMPRESSED.txt.gz')
    const output = fs.createWriteStream('./docs/textDECOMPRESSED.txt')
    input.pipe(unzip).pipe(output)
}

decompress()

