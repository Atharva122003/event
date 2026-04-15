// 1) On Event Handling
// Create an EventEmitter instance and define a 'greet' event.
// Add a listener that prints "Hello, Event!" and emit the event.

const EventEmitter = require("events");

const emitter = new EventEmitter();

// Define listener
emitter.on("greet", () => {
    console.log("Hello, Event!");
});

// Emit event
emitter.emit("greet");
