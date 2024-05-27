//Uses the logEvents function from the logEvents.js file to log events to the console and to a file.

const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", msg => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit("log", "Log event emitted.");
}, 2000);