// There is a bug in the below code preventing the factors of 18 from being displayed accurately.
var dividend = 24;
var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
var i;

for (i = 0; i < numbers.length; i++) {
  var isFactor;
  var divisor = numbers[i];

  if (dividend % divisor === 0) {
    isFactor = true;
  }

  if (isFactor) {
    console.log(divisor + ' is a factor of ' + dividend + '!');
  }
}

// Another bug here
function add() {
  var x = 5, y = 1;
  return x + y;
}
console.log(x);

// Another bug here
const divide = 52 / 2;
console.log(divide())

// Last bug here
x = 3
function endLoop() {
  x += 2;
  if (x % 2 == 0) return;
  endLoop();
}
endLoop(); 