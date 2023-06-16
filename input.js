const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register handleUserInput as the "data" callback handler for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};
