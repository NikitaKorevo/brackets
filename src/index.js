module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  bracketsOpen = [];
  bracketsClose = {};
  stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsOpen.push(bracketsConfig[i][0]);
    bracketsClose[bracketsConfig[i][1]] = bracketsOpen[i];
  }
  console.log(str);
  console.log(bracketsOpen);
  console.log(bracketsClose);

  for (let i = 0; i < str.length; i++) {
    console.log('str[i] ' + str[i]);
    if ( bracketsOpen.includes(str[i]) && !(str[i] === '|' && stack[stack.length - 1] === '|') && !(str[i] === '7' && stack[stack.length - 1] === '7') && !(str[i] === '8' && stack[stack.length - 1] === '8') ) {
      console.log('в stack зашел el ' + str[i]);
      stack.push(str[i]);
      console.log('stack: ' + stack);
    } else {
      console.log('в else ');
      if (stack.length === 0) console.log(false); // return false;
      if (stack[stack.length - 1] === bracketsClose[str[i]] ) {
        console.log('удаляем из pop')
        stack.pop();
        console.log(stack);
      } else {
        console.log(false);
        return false;
      }
    }
  }

  console.log('STACK в итоге: ' + stack)
  if (stack.length === 0) {
    console.log('stack.length === 0')
    return true;
  } else {
    console.log('stack.length !== 0')
    return false;
  }
}
