// Implement the following operations of a queue using stacks.
//
//
// push(x) -- Push element x to the back of queue.
//
//
// pop() -- Removes the element from in front of queue.
//
//
// peek() -- Get the front element.
//
//
// empty() -- Return whether the queue is empty.
//
//
// Notes:
//
// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).


/**
 * @constructor
 */
var Queue = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.arr.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.arr[0]
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.arr.length === 0;
};
