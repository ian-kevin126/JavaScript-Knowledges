/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */

/*
  利用栈，索引代表深度，值代表节点
  存储深度遍历过程中的节点
  
  核心思想就是，先初始化第一个数字为根节点
  stack[0] = 1
  意思是：1 这个节点的深度是 0
  
  然后再遍历 - ，此时得到信息，连续的 '-' 的长度为 1，也就是 下一个遇到的数字 401 的
  节点深度是 1，那么此时判断 stack 的栈顶节点的深度是 0，0 刚好是 1 的父亲的深度，那么
  判断这个节点是否有左节点，如果没有，就挂上，如果有就挂到右节点，然后这个节点入栈
  
  。。。重复这个过程
  
  如果 stack[5] = 17 表达的意思是：栈中保存的节点值为 17 的节点，它的索引为 5，代表它
  的深度是 5
  
  👉看这个案例理解 ！！！！！！
  举例：S: 1-401--349---90--88   stack: []
  1. 先在字符串中搜索第一个数字作为根节点，搜索到 1，入栈，搜索过的部分在 S 上截掉
     S: -401--349---90--88   stack: [1]
  %: 下面不停的搜索深度，搜索数字，搜索深度，搜索数字。。。
  2. 搜索深度：'-' 深度为 1，那么根据下一个搜索出来的值创建的节点应该是深度为 0 的节点
     的子节点，那么做一个操作，不断删除 stack 栈顶的节点，保证栈顶节点的索引为 0，也就是
     深度为 0 的节点，这样是为了在下一轮搜索数字的时候，根据数字创建节点并挂到深度为 0 的节点
     上
     S: 401--349---90--88   stack: [1]
  3. 搜索数字：'401'，那么根据数字 401 创建节点，挂到栈顶元素 1 的子节点，并把当前节点 401
     入栈，因为题目给出的是深度遍历的结果，所以 401 也有可能作为其他节点的父节点。挂上去的
     策略也很简单，判断父节点是否有左节点，没有就挂到 parent.left 上面，没有的话，就挂到
     parent.right 上
     S: --349---90--88  stack: [1, 401]
  4. 搜索深度：'--' 深度为 2
     S: 349---90--88   stack: [1, 401]
  5. 搜索数字：'349'
     S: ---90--88  stack: [1, 401, 349]
  。。。
*/
var recoverFromPreorder = function (S) {
  let stack = [], root;

  // 从字符串中获取连续的 '-' 作为深度，并且返回裁剪后的 str 和找到的深度
  const getDeep = str => {
    if (!str.startsWith('-')) {
      return {
        target: undefined, S: str
      }
    };
    let deep = 0, i = 0, len = str.length;
    while (i < len && str.charAt(i++) === '-') deep++;
    return {
      target: deep,
      S: str.slice(deep)
    }
  };

  // 从字符串中获取数字，并返回裁剪后的 str 和 找到的数字
  const getVal = str => {
    const strNum = '0123456789';
    if (str.length <= 0 || strNum.indexOf(str.charAt(0)) === -1) {
      return {
        target: undefined,
        S: str
      }
    };
    let num = '', i = 0, len = str.length;
    while (i < len && strNum.indexOf(str.charAt(i)) !== -1) {
      num += str.charAt(i);
      i++;
    };
    return {
      target: num === '' ? undefined : Number(num),
      S: str.slice(num.length)
    }
  }

  // 把 num 作为值创建一个节点，放到 parent 上面
  const saveNode2Parent = (num, stack) => {
    let parent = stack[stack.length - 1];
    let newNode = new TreeNode(num);
    if (!parent.left) {
      parent.left = newNode;
    } else if (!parent.right) {
      parent.right = newNode;
    }
    stack.push(newNode);
  }

  // 初始化根节点
  let res = getVal(S);
  S = res.S;
  let value = res.target;
  if (value === undefined) return root;

  root = new TreeNode(value);
  stack.push(root);

  // 开始循环遍历深度、数字、深度、数字。。。
  let nextFind = 'deep', // deep: 寻找深度  val: 寻找下一个节点值
    target;
  do {
    if (nextFind === 'deep') { // 下一轮要寻找的是深度
      let res = getDeep(S);
      S = res.S;
      target = res.target;
      if (target === undefined) return root; // 根节点已经找到了，再次出现深度为 0，说明用例有问题，其实不会出现这样的用例
      let deep = target;
      // 删到 stack 的末位节点深度是 deep-1，也就是下一次找到的节点的父节点
      while (stack.length > deep) {
        stack.pop();
      }
    } else { // 下一轮要寻找的是节点值
      let res = getVal(S);
      S = res.S;
      target = res.target;
      if (target === undefined) return root;
      saveNode2Parent(target, stack);
    }

    nextFind = nextFind === 'deep' ? 'val' : 'deep'; // 切换下一轮要找的目标类型
  } while (target !== undefined);

  return root;
};