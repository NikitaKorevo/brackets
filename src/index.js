module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  bracketsOpen = [];
  bracketsClose = {};
  stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsOpen.push(bracketsConfig[i][0]);
    bracketsClose[bracketsConfig[i][1]] = bracketsOpen[i];
  }

  for (let i = 0; i < str.length; i++) {
    if ( bracketsOpen.includes(str[i]) && !(str[i] === '|' && stack[stack.length - 1] === '|') && !(str[i] === '7' && stack[stack.length - 1] === '7') && !(str[i] === '8' && stack[stack.length - 1] === '8') ) {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === bracketsClose[str[i]] ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
