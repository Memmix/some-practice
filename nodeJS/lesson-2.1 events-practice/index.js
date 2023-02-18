const EventEmitter = require('events') // название EventEmmiter - общепринятая практика

const emitter = new EventEmitter()

// создание события
emitter.on('some_event', (text) => {
    console.log(text)
})
// вызов события 
emitter.emit('some_event', 'Event test text')

