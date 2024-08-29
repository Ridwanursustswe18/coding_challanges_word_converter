function getBytesCount(data) {
    return Buffer.byteLength(data);
  }
  
  function getNumberOfLines(data) {
    return data.match(/\r\n|\r|\n/g)?.length || 0; // Use optional chaining for safety
  }
  
  function getNumberOfCharacters(data) {
    return data.length;
  }
  
  function getNumberOfWords(data) {
    return data.trim().split(/\s+/).filter(Boolean).length; // Filter to avoid counting empty strings
  }
  module.exports = {
    getBytesCount,
    getNumberOfLines,
    getNumberOfCharacters,
    getNumberOfWords,
  };