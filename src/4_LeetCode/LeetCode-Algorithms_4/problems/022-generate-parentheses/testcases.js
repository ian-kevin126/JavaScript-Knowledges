module.exports = [
  {
    input: [0],
    output: [],
  },
  {
    input: [1],
    output: ['()'],
  },
  {
    input: [2],
    output: ['()()', '(())'],
  },
  {
    input: [3],
    output: ['()()()', '(())()', '()(())', '(()())', '((()))'],
  },
  {
    input: [4],
    output: [
      '()()()()', '(())()()', '()(())()', '(()())()', '((()))()',
      '()()(())', '(())(())', '()(()())', '(()()())', '((())())',
      '()((()))', '(()(()))', '((()()))', '(((())))',
    ],
  },
];
