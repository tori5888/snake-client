const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// Connect to the game server
const connection = connect();

// Setup input from stdin and pass the connection object
setupInput(connection);
