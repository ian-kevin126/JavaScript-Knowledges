//Get 1 to 255
//get_array();
// function get_array(){
//     var arr=[];
//     for (var i = 1;i<=255;i++){
//         arr.push(i);
//         console.log(arr[i-1]);
//     }
//     return arr;
// }

// Get Even 1000
// console.log(sum_even_numbers())
// function sum_even_numbers(){
//     var sum = 0;
//     for(var i = 1; i<=1000;i++){
//         if(i%2 === 0)
//             sum+= i;
//     }
//     return sum;
// }

// Sum odd 5000
// console.log(sum_odd_numbers());
// function sum_odd_numbers(){
//     var sum = 0;
//     for(var i = 1;i<=5000;i++){
//         if(i%2 != 0)
//             sum+= i;
//     }
//     return sum;
// }

//Iterate an array
// console.log(iterArr([1,2,5]))
// function iterArr(arr){
//     var sum = 0;
//     for(i = 0; i < arr.length; i++)
//         sum+= arr[i];
//     return sum;
// }

//Find max
// console.log(findMax([-3,3,5,7]));
// function findMax(arr){
//     var max = 0;
//     for(i = 0; i < arr.length; i++){
//         if (arr[i] > max)
//             max = arr[i];
//     }
//     return max;
// }

//Find Average
// console.log(findAvg([1,3,5,7,20]));
// function findAvg(arr){
//     var sum = 0;
//     for(i = 0; i < arr.length; i++)
//         sum+= arr[i];
//     return sum / arr.length;
// }

//Array odd
// console.log(oddNumbers());
// function oddNumbers(){
//     var arr = [];
//     for (i = 1; i <= 50; i++){
//         if (i%2 !== 0)
//             arr.push(i);
//     }
//     return arr;
// }

//Greater than Y
// console.log(greaterY([1,3,5,7],3));
// function greaterY(arr,Y){
//     var count = 0;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > Y)
//             count++;
//     }
//     return count;
// }

//Squares
// console.log(squareVal(1,5,10,-2));
// function squareVal(arr){
//     for(i = 0; i < arr.length; i++)
//         arr[i] = arr[i]*arr[i];
//     return arr;
// }

//No Negatives
// console.log(noNeg([1,5,10,-2]));
// function noNeg(arr){
//     for (i = 0; i < arr.length; i++){
//         if(arr[i] < 0)
//             arr[i] = 0;
//     }
//     return arr;
// }

//Max/Min/Average
// console.log(maxMinAvg([1,5,10,-2]));
// function maxMinAvg(arr){
//     var arrnew = [];
//     var max = 0;
//     var min = 0;
//     var sum = 0;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > max)
//             max = arr[i];
//         else if(max > arr[i])
//             min = arr[i];
//         sum+= arr[i];
//     }
//     arrnew.push(max);
//     arrnew.push(min);
//     arrnew.push(sum/arr.length);
//     return arrnew;
// }

//Swap Values
// console.log(swap([1,5,10,-2]));
// function swap(arr){
//     var arrnew = [];
//     for (i = 0; i < arr.length; i++){
//         if(i === 0)
//             arrnew[0] = arr[arr.length-1];
//         else if (i == arr.length - 1)
//             arrnew[arr.length -1] = arr[0];
//         else
//             arrnew[i] = arr[i];
//     }
//     return arrnew;
// }

//Number to string
// console.log(numToStr([-1,-3,2]));
// function numToStr(arr){
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] < 0)
//             arr[i] = "DOJO"
//     }
//     return arr;
// }
