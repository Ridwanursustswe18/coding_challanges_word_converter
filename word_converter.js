
const {handleFile,handleStdin} = require('./input_handler');
// Get command line arguments
const args = process.argv.slice(2);

// Check for the command format
if (args.length === 2 && (args[0] === '-c' || args[0] === '-l' || args[0] === '-w' || args[0] === '-m')) {
  handleFile(args[1], args[0]); // filename and option
} else if (args.length === 1 && args[0].startsWith('-')) { 
  handleStdin(args[0]); 
} else if (args.length === 1) {
  handleFile(args[0], null); // single filename
} else {
  console.error(`Usage: [-c|-l|-w|-m] filename OR  [-c|-l|-w|-m]`);
  process.exit(1);
}