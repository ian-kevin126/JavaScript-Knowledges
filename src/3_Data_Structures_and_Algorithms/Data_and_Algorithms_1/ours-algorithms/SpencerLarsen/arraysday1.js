// //push front
// console.log(pushFront([1,2,3,4,5],0));
// function pushFront(arr,newVal){
//     for(var i = arr.length - 1; i >= 0; i--){
//         arr[i + 1] = arr[i];
//     }
//     arr[0] = newVal;
//     return arr;
// };
// //pop front
// console.log("front: " + popFront([1,2,3,4,5]));
// function popFront(arr){
//     var front = arr[0];
//     for(var i = 0; i < arr.length - 1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr.pop(arr.length - 1);
//     console.log(arr);
//     return front;
// }
// // insert at
// // index is spot in array you wanted insert at, i.e. if we want index before 2 and after 1, we would set it to 2
// console.log(insertAt([1,2,3,4,5],2,7));
// function insertAt(arr,index,val){
//     for(var i = arr.length -1; i >= index - 1; i--){
//         arr[i + 1] = arr[i];
//     }
//     arr[index-1] = val;
//     return arr;
// }
// //remove at
// console.log(removeAt([1,2,3,4,5],2));
// function removeAt(arr,index){
//     var valAt = arr[index - 1];
//     for(var i = index - 1; i < arr.length - 1; i++){
//         arr[i] = arr[i + 1];
//     }
//     arr.pop(arr.length - 1);
//     console.log(arr);
//     return "Value at index " + index + " is " + valAt;
// }
//swap array pairs
// console.log(swapPairs([1,2,3,4]));
// function swapPairs(arr){
//     var tempVal = 0;
//     var index = 0;
//     if(arr.length % 2 === 0)
//         index = arr.length;
//     else
//         index = arr.length - 1;
//     for(var i = 0; i < index-1; i+=2){
//         tempVal = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = tempVal;
//     }
//     return arr;
// }
//array remove duplicates
// console.log(removeDup([1,2,2,3,4,5,5,6]));
// function removeDup(arr){
//     var new_arr = [];
//     for(var i = 0; i < arr.length; i++){ //go to 2nd to last element in array so we don't get an undefined on last
//         if(arr[i] !== arr[i+1]){
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr;
// }
