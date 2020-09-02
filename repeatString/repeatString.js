const repeatString = function(string, num) {
  if (num < 0){return "ERROR";}
  var word = "";
  while(num > 0){
    word += string;
    num--;
  }
  return word;
}

module.exports = repeatString