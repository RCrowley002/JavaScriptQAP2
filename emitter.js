//constructing an emitter to log when a specific route is accessed,
// log warnings and errors for when a page is not found,
// and log the status codes for each route

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

// initializing the emitter
const myEmitter = new MyEmitter();

module.exports = myEmitter;
