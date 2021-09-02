var a = 1900;
var boo = 3;
function testLeapYear(a,boo) {
var boo=false;
if (a%4 == 0) {
  boo=true;
}
if (a%100 == 0) {
  boo=false;
}
if (a%400 == 0) {
  boo=true;
}
console.log('Year '+a)
return (a,boo);
}
console.log(testLeapYear( a, boo))
