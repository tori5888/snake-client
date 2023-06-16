const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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
    // Send "Name: TORI" to the server
    conn.write("Name: TORI");
  });

  return conn;
};

console.log("Connecting ...");
connect();

// Export the connect function
module.exports = { connect} ;