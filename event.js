const EventEmitter = require('node:events');

class School extends EventEmitter {}

const school1 = new School();

school1.on('ring', function () {
  console.log('The bell rang');
});

school1.emit('ring');
