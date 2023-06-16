// client.js
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event listener for incoming data
  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  // Event listener for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: TORI"); // Send player name to the server
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect } ;
