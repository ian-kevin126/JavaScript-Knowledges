
  function leftpad(str,length,ch){
    let len = length-str.length+1 //需要补齐ch的长度
    return Array(len).join(ch)+str
  }
// console.time('leftpad')
// for(let i=0;i<100000;i++){
//   leftpad('hello',100000,'0')
// }
// console.timeEnd('leftpad')

  // 补齐10个
  // console.log(leftpad('hello',10,'0'))
  // 二分法

  // 0 拼接20次

  // 00000000 + 00000000+ 0000 直拼接3次

  function leftpad2(str,length,ch){
    let len = length -str.length
    // 二分法
    let total = ''
    while(true){
      if(len%2==1){
        total += ch
      }
      if(len==1){
        return total +str
      }

      ch+= ch // 0  00  0000
      len = parseInt(len/2)
    }
  }
  console.time('我的代码不用位运算的100W次')
  for(let i=0;i<1000000;i++){
    leftpad2('hello',1000000,'0')
  }
  console.timeEnd('我的代码不用位运算的100W次')
//   console.time('leftpad2')
// for(let i=0;i<100000;i++){
//   leftpad2('hello',1000000,'0')
// }
// console.timeEnd('leftpad2')
  // console.log(leftpad2('hello',10,'0'))

  // 12
  // 10  1     0   1
  // total :"000000000000000000000"
  // ch:'0000000000000000'

  // 一个数字除以2 余1
  // &按位与两个二进制 按位置进行 &&


    // 101 //5
    // 001 // 1  出了第1，其他位置都是0， 与的结果都是0
    // 001

  // len%2==1  其实就是按位与 
  // len/2  num >> <<



// // 我的代码 10W次
// function leftpad4(str,length,ch){
//   let len = length =str.length
//   // 二分法
//   let total = ''
//   let arr = []
//   while(len){
//     if(len & 1){
//       total += ch
//     }
//     if(len==1){
//       return total +str
//     }
//     ch+= ch // 0  00  0000
//     len = len>>1
//   }
// }
// console.time('我的代码100W次')
// for(let i=0;i<1000000;i++){
// leftpad4('hello',1000000,'0')
// }
// console.timeEnd('我的代码100W次')


// 我的代码
function leftpad3(str,length,ch){
    let len = length -str.length
    // 二分法
    let total = ''
    while(len){
      if(len & 1){
        total += ch
      }
      if(len==1){
        return total +str
      }
      ch+= ch // 0  00  0000
      len = len>>1
    }
  }

console.time('我的代码100W次')
for(let i=0;i<1000000;i++){
  leftpad3('hello',1000000,'0')
}
console.timeEnd('我的代码100W次')


// // 孙畅同学的代码
function padStart (str, length, code) {
 let len = length - str.length
 if (len > 0) {
  let subFix = new Array(len).fill(code).join('')
  str = subFix + str
 }
 return str
}  
console.time('孙畅同学的代码1W次')
for(let i=0;i<10000;i++){
  padStart('hello',10000,'0')
}
console.timeEnd('孙畅同学的代码1W次')




// kayaba同学的代码
String.prototype.padStartTest3 =function (maxLength, fillString=' ') {
    let str = this;
    if(str.length > maxLength) return str
    let repeatStr = fillString
        .repeat(maxLength - str.length)
        .slice(0, maxLength - str.length);
    return repeatStr + str;
};
console.time('kayaba同学的代码100W(考虑不用repeat在实现一个)')
for(let i=0;i<1000000;i++){
  'hello'.padStartTest3(1000000,'0')
}
console.timeEnd('kayaba同学的代码100W(考虑不用repeat在实现一个)')


String.prototype.padstart = function(len, str) {
    const l = len - this.length;
    if (l > 0) {
        const strArr = str.split();
        const strLen = strArr.length;
        const index = l / strLen;
        const remainder = l % strLen; 
        let cache = []
        if (index > 0) {
            for (let i=0; i<index; i++) {
                cache = cache.concat(strArr)
            }
        }
        return cache.join('') + strArr.slice(0, remainder).join('') + this;
    }
    return this;
}
console.time('hateko同学的代码1K次')
for(let i=0;i<1000;i++){
  'hello'.padstart(1000,'0')
}
console.timeEnd('hateko同学的代码1K次')

// // 周阳同学的代码
function cpadStart (str, num, ch) {
      let string = str
      let len = num - string.length
      if (len <= 0) return string
      for (let i = 0;i < len;i++) {
        string = ch + string
      }
      return string
    }
console.time('周阳同学的代码1W次')
for(let i=0;i<10000;i++){
  cpadStart('hello',10000,'0')
}
console.timeEnd('周阳同学的代码1W次')





String.prototype.padStart1 = (maxLength, string) => {
  let str = this;
  if (str.length >= maxLength) {
    return str;
  } else {
    let strLength = maxLength - str.length,
      num = Math.ceil(strLength / string.length);
    while (num >= 1) {
      string += string;
    }
    return string.slice(0, strLength) + str;
  }
};
console.time("宋奇超的代码");
for (let i = 0; i < 10000; i++) "kaikeba".padStart1(10000, "0");
console.timeEnd("宋奇超的代码");
console.log("hello".padStart1(10, "0"))


console.time('JS自带的padStart100W次')
for(let i=0;i<1000000;i++){
  'hello'.padStart(1000000,'0')
}
console.timeEnd('JS自带的padStart100W次')