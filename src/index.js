module.exports = function check(str, bracketsConfig) {
  let itemsArr = [];
  let correctN = 0;

  for (let i = 0; i < bracketsConfig.length; i++) {
    itemsArr[i] = bracketsConfig[i].join('');
  }

  let ctr = 0;
  let j = 0;

  while(ctr < itemsArr.length) {
      while (j < str.length) {
        correctN = str.indexOf(itemsArr[ctr]);
          if (correctN !== -1){
              str = str.substring(0, correctN) + str.substring(correctN + itemsArr[ctr].length, str.length);
              ctr = 0;
          } else {
              j = str.length;
          }
      }
      ctr++;
      j = 0;
  }
  return (!str);
};