// add solution here
function theBeatlesPlay(musicians,instruments) {
  var x = []
  for (var i = 0; i < musicians.length; i++) {
    x.push(musicians[i] + ' plays ' + instruments[i])
  }
  return x;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}
