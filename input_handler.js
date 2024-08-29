const fs = require('fs');
const readline = require('readline');
const processInput = require('./process_input');
function handleFile(filename, option) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      process.exit(1);
    }
    processInput(data, option, filename);
  });
}
function handleStdin(option) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  let inputData = '';

  rl.on('line', (line) => {
    inputData += line + '\n';
  });

  rl.on('close', () => {
    processInput(inputData, option, "");
  });
}

module.exports = {handleFile,handleStdin};