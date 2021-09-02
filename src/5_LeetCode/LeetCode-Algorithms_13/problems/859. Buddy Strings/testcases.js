var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: ["ab", "ba"],
    output: true
  },
  {
    input: ["ab", "ab"],
    output: false
  },
  {
    input: ["aa", "aa"],
    output: true
  },
  {
    input: ["aaaaaaabc", "aaaaaaacb"],
    output: true
  },
  {
    input: ["", "aa"],
    output: false
  },
];