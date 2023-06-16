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
  const specialKeys = {
    'w': "Move: up",
    'a': "Move: left",
    's': "Move: down",
    'd': "Move: right",
    '1': "Say: ❤️❤️❤️❤️❤️",
    '2': "Say: RARARARARARARW",
    '3': "Say: Oop SkKSKSks",
    '\u0003': process.exit
  };

  if (specialKeys[data]) {
    connection.write(specialKeys[data]); // Send the special key command to the server
  } else if (data === '\u0003') {
    process.exit(); // Exit the process if CTRL + C is pressed
  }
};

module.exports = {  setupInput,};
