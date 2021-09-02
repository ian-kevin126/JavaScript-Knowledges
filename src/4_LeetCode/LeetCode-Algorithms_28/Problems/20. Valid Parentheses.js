var isValid = function (s) {
    if (s.length === 0) return true;
    if (s.length < 2) return false;

    const close = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const open = [];

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            open.push(char);
        } else {
            const openBracket = open.pop();
            if (close[char] !== openBracket) return false;
        }
    }
    return open.length === 0;
};