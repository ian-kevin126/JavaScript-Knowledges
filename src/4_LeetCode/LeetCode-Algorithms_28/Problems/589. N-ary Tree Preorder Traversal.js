var preorder = function (root) {
    let dummy = root;
    let stack = [root];
    let result = [];

    while (stack.length) {
        dummy = stack.pop();
        if (dummy != null) {
            result.push(dummy.val);

            if (dummy.children) {
                for (let i = dummy.children.length - 1; i >= 0; i--) {
                    stack.push(dummy.children[i]);
                }
            }
        }
    }

    return result;
}