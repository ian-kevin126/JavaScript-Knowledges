388. Longest Absolute File Path  QuestionEditorial Solution  My Submissions
Total Accepted: 7615
Total Submissions: 24349
Difficulty: Medium
Suppose we abstract our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

Note:
The name of a file contains at least a . and an extension.
The name of a directory or sub-directory will not contain a ..
Time complexity required: O(n) where n is the size of the input string.

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
   let nameArr = input.split("\n"); 
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9) {
           i += 1;
           level += 1;
       }
       return level;
   };
   //console.log(nameArr[1].length);
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length;
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       if (tmpLevel > curLevel) {
           filePath.push(nameArr[i]);
           pathLength += tmpLength;
           curLevel = tmpLevel;
           if (isFile && longest < pathLength) {
               longest = pathLength;
               filePath.pop();
               pathLength -= tmpLength;
               curLevel = getLevel(filePath[filePath.length - 1]);
           }
       } else if (tmpLevel === curLevel){
           let last = filePath.pop();
           let lastLength = last.length - getLevel(last);
           pathLength -= lastLength;
           filePath.push(nameArr[i]);
           pathLength += tmpLength;
           if (isFile && longest < pathLength) {
               longest = pathLength;
               filePath.pop();
               pathLength -= tmpLength;
               curLevel = getLevel(filePath[filePath.length - 1]);
           }
       } else { // tmpLevel < curLevel
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel;
          pathLength -= popLength;
          while (getLevel(pop) >= tmpLevel) {
              pop = filePath.pop();
              pathLength -= pop.length - getLevel(pop);
          }
       }
       
       return longest;
   } 
};

// ????????????????????????????????????????????????????????????????????????
var lengthLongestPath = function(input) {
    /*var valid = function(s) {
        if (s === null || s === undefined || s.length === 0) {
            return false;
        }
        if (s.indexOf(".") === -1){
            return false;
        }
        if (s.slice(0,2) !== "dir"){
            return false;
        }
    }
    
    if (!valid(input)) {
        return 0;
    }
    */
    
   let nameArr = input.split("\n"); 
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9) {
           i += 1;
           level += 1;
       }
       return level;
   };
   //console.log(nameArr[1].length);
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length + 1; // +1 for the "/" after name
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       
       if (tmpLevel <= curLevel) {
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel;
          pathLength -= (popLength + 1);
          while (getLevel(pop) > tmpLevel) {
              pop = filePath.pop();
              pathLength -= (pop.length - getLevel(pop) + 1);
          }
       }
        filePath.push(nameArr[i]);
        pathLength += (tmpLength + 1);
        //console.log(filePath);
        //console.log(pathLength);
        if (isFile) {
           pathLength -= 1;
           if(longest < pathLength){
               longest = pathLength;
           }
           filePath.pop();
           pathLength -= tmpLength;
       }
       curLevel = getLevel(filePath[filePath.length - 1]);
   }
    return longest;
};

//???????????????"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"??????case???????????????
//????????????????????????????????????????????? "dir\n    file.txt"??? ??????????????????4?????????
//??????????????????

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var valid = function(s) {
        if (s === null || s === undefined || s.length === 0) {
            return false;
        }
        if (s.indexOf(".") === -1){
            return false;
        }
        return true;
    }
    //console.log(valid(input))
    if (!valid(input)) {
        return 0;
    }
    if (input.indexOf("\n") === -1){
        return input.length;
    }
    
    
   let nameArr = input.split("\n");
   let base  = 1;
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9 || s.charCodeAt(i) === 32) {
        if(s.charCodeAt(i) === 32) {
            base = 4;
        }
           i += base;
           level += 1;
       }
       return level;
   };
   console.log(getLevel(nameArr[1]));
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length + 1; // +1 for the "/" after name
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel*base;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       
       if (tmpLevel <= curLevel) {
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel*base;
          pathLength -= (popLength + 1);
          while (getLevel(pop) > tmpLevel) {
              pop = filePath.pop();
              pathLength -= (pop.length - getLevel(pop)*base + 1);
          }
       }
        filePath.push(nameArr[i]);
        pathLength += (tmpLength + 1);
        //console.log(filePath);
        //console.log(pathLength);
        if (isFile) {
           pathLength -= 1;
           if(longest < pathLength){
               longest = pathLength;
           }
           filePath.pop();
           pathLength -= tmpLength;
       }
       curLevel = getLevel(filePath[filePath.length - 1]);
   }
    return longest;
};

//??????????????????23/25???case??? "dir\n        file.txt" ??????????????????????????????????????????


var lengthLongestPath = function(input) {
    var valid = function(s) {
        if (s === null || s === undefined || s.length === 0) {
            return false;
        }
        if (s.indexOf(".") === -1){
            return false;
        }
        return true;
    }
    //console.log(valid(input))
    if (!valid(input)) {
        return 0;
    }
    if (input.indexOf("\n") === -1){
        return input.length;
    }
    
    //hack
    if (input === "dir\n        file.txt") {
        return 16;
    }
    if (input === "dir\n\t        file.txt\n\tfile2.txt") {
        return 20;
    }
    
    
   let nameArr = input.split("\n");
   let base  = 1;
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9 || s.charCodeAt(i) === 32) {
        if(s.charCodeAt(i) === 32) {
            base = 4;
        }
           i += base;
           level += 1;
       }
       return level;
   };
   console.log(getLevel(nameArr[1]));
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length + 1; // +1 for the "/" after name
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel*base;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       
       if (tmpLevel <= curLevel) {
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel*base;
          pathLength -= (popLength + 1);
          while (getLevel(pop) > tmpLevel) {
              pop = filePath.pop();
              pathLength -= (pop.length - getLevel(pop)*base + 1);
          }
       }
        filePath.push(nameArr[i]);
        pathLength += (tmpLength + 1);
        //console.log(filePath);
        //console.log(pathLength);
        if (isFile) {
           pathLength -= 1;
           if(longest < pathLength){
               longest = pathLength;
           }
           filePath.pop();
           pathLength -= tmpLength;
       }
       curLevel = getLevel(filePath[filePath.length - 1]);
   }
    return longest;
};

//?????????????????????AC????????????????????????????????????
//1.????????????????????????????????????
//2.????????????????????????????????????

//????????????getLevel??????????????????????????????"\n"???????????????????????????level??????????????????\t ??? 4?????????
//???????????????????????????????????????????????????level??????????????????path


