// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register handleUserInput as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  if (data === 'w') {
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === '\u0003') {
    process.exit();
  }
};



module.exports = {  setupInput,};
