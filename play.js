const net = require("net");

// establishes a connection with the game server
const connect = function () {
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

  return conn;
};

console.log("Connecting ...");
connect();