const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter()
const eventName = 'user:click'

myEmitter.on(eventName, (click) => {
  console.log('a user has clicked', click)
})

// myEmitter.emit(eventName, 'on scroll bar')
// myEmitter.emit(eventName, 'on ok button')

// let count = 0
// setInterval(() => {
//   myEmitter.emit(eventName, 'on ok button ' + count++)
// }, 1000)

const stdin = process.openStdin()

function main() {
  return new Promise(function(resolve, reject) {
    stdin.addListener('data', (value) => {
      // console.log(`you typed: ${value.toString().trim()}`)
      return resolve(value)
    })
  })
}

main().then(function(result) {
  console.log('result', result)
})
