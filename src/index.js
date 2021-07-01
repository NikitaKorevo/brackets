module.exports = function check(str, bracketsConfig) {
  
  let openKruglaya = 0;
  let closeKruglaya = 0;
  let openFigurnaya = 0;
  let closeFigurnaya = 0;
  let openKvadratnaya = 0;
  let closeKvadratnaya = 0;
  let palka = 0;
  let index = 0;
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (index < 0) return false;
    switch (str[i]) {
      case '(':
        openKruglaya++;
        index++;
        break;

      case ')':
        closeKruglaya--;
        index--;
        break;

      case '{':
        openFigurnaya++;
        index++;
        break;

      case '}':
        closeFigurnaya--;
        index--;
        break;

      case '[':
        openKvadratnaya++;
        index++;
        break;

      case ']':
        closeKvadratnaya--;
        index--;
        break;

      case '|':
        palka++
        break;

      default:
        break;
    }
  }
  if (palka % 2 !== 0) return false;
  console.log(openKruglaya + closeKruglaya + openFigurnaya + closeFigurnaya + openKvadratnaya + closeKvadratnaya === 0);
  return (openKruglaya + closeKruglaya + openFigurnaya + closeFigurnaya + openKvadratnaya + closeKvadratnaya === 0);
}
