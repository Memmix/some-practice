const EventEmitter = require('events')

class Logger extends EventEmitter {
    log = (message) => {
        console.log(message)
        this.emit('some_event', { id: 1, text: 'Event test text' })
    }
}

module.exports = Logger

// *Расширение класса, с использованием модуля util*
// const util = require('util')
// util.inherits(Logger, EventEmitter) 