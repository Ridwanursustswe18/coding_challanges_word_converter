const {
    getBytesCount,
    getNumberOfLines,
    getNumberOfCharacters,
    getNumberOfWords,
  } = require('./helper_functions');
  function processInput(data, option, source) {
    let result;
  
    switch (option) {
      case '-l':
        result = getNumberOfLines(data);
        break;
      case '-w':
        result = getNumberOfWords(data);
        break;
      case '-c':
        result = getBytesCount(data);
        break;
      case '-m':
        result = getNumberOfCharacters(data);
        break;
      default:
        result = [
          getNumberOfLines(data),
          getNumberOfWords(data),
          getBytesCount(data)
        ];
        break;
    }
  
    if (Array.isArray(result)) {
      console.log(`${result[0]} ${result[1]} ${result[2]} ${source}`);
    } else {
      console.log(`${result} ${source}`);
    }
  }
  module.exports = processInput;