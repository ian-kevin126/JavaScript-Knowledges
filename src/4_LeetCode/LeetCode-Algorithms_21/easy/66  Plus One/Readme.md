## Problem

Given a non-empty array of digits┬árepresenting a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]

Output: [1,2,4]

Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]

Output: [4,3,2,2]

Explanation: The array represents the integer 4321.

## Pre analysis

Simply add one and keep carry. If the carry remains at last append 0 to array.

## Another Solution

Better code

    var plusOne = function(digits) {
        for (let i = digits.length - 1; i>=0; i-- ){
            if (digits[i] < 9) {
                digits[i] = digits[i] + 1;
                return digits;
            } else {
                digits[i] = 0;
            }
        }
        digits.unshift(1);
        return digits;
    };
