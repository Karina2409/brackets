module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  let result = true;
  let j = 0;
  for (j; j < str.length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let openBracket = bracketsConfig[i][0];
      let closeBracket = bracketsConfig[i][1];
      let bracket = str[j];
      if (bracket === closeBracket && brackets.at(-1) === openBracket) {
        brackets.pop();
      }
      else if (bracket === openBracket) {
        brackets.push(bracket);
      }
      else if (bracket === closeBracket && brackets.at(-1) !== openBracket) {
        return false;
      }
    }
  }
  if (brackets.length !== 0) {
    return false;
  }
  return result;
}
