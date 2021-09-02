/* 
首先说明一个问题，简单阐述一下递归，分治算法，动态规划，贪心算法这几个东西的区别和联系，心里有个印象就好。
>分治算法是一种典型的递归结构

>写递归算法的关键是要明确函数的「定义」是什么，
>然后相信这个定义，利用这个定义推导最终结果，绝不要试图跳入递归。

> 只要涉及递归，都可以抽象成二叉树的问题。

> 1.递归是一种编程技巧，一种解决问题的思维方式；
> 2.分治算法 和 动态规划  很大程度上是递归思想基础上的
> 3.虽然动态规划的最终版本大都不是递归了，但解题思想还是离不开递归
> 4.贪心算法是动态规划算法的一个子集，可以更高效解决一部分更特殊的问题。
*/
// ! 对于递归相关的算法，时间复杂度这样计算（递归次数）*（递归函数本身的时间复杂度）。

// ! 显然，排序问题分解出的子问题是不重复的，
// ! 如果有的问题分解后的子问题有重复的（重叠子问题性质），那么就交给动态规划算法去解决！

/* 
* 递归的基本思想是某个函数直接或者间接地调用自身，
* 这样就把原问题的求解转换为许多性质相同但是规模更小的子问题。
* 我们只需要关注如何把原问题划分成符合条件的子问题，
* 而不需要去研究这个子问题是如何被解决的。递归和枚举的区别在于：

>枚举是横向地把问题划分，然后依次求解子问题，而递归是把问题逐级分解，是纵向的拆分。


>递归代码最重要的两个特征：
#  1.结束条件      --定义了最简子问题的答案
#  2.自我调用。    --在解决子问题


递归代码的精髓在于调用自己去解决规模更小的子问题，直到到达结束条件；
而数学归纳法之所以有用，就在于不断把我们的猜测向上加一，扩大结论的规模，
没有结束条件，从而把结论延伸到无穷无尽，也就完成了猜测正确性的证明。


> 为什么要写递归

!首先为了训练逆向思考的能力。
递推的思维是正常人的思维，总是看着眼前的问题思考对策，解决问题是将来时；
递归的思维，逼迫我们倒着思考，看到问题的尽头，把解决问题的过程看做过去时。

!第二，练习分析问题的结构，当问题可以被分解成相同结构的小问题时，
!你能敏锐发现这个特点，进而高效解决问题。

!第三，跳出细节，从整体上看问题。

>明白一个函数的作用并相信它能完成这个任务，千万不要试图跳进细节。
*/

//> 例子1: 遍历二叉树
function traverse(root) {
  if (root == null) return;
  traverse(root.left);
  traverse(root.right);
}

// > 例子2： 遍历N叉树

function traverse(root) {
  if (root == null) return;
  for (child of root.children)
      traverse(child);
}
// ! 对于N叉树，显然没有中序遍历。


/* 
! 匹配目标值的路径总数
来源于 LeetCode PathSum III： https://leetcode.com/problems/path-sum-iii/ 
root = [10,5,-3,3,2,null,11,3,-2,null,1],
sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11


给一课二叉树，和一个目标值，节点上的值有正有负，
返回树中和等于目标值的路径条数，让你编写 pathSum 函数：

*/

/* 
PathSum 函数：给他一个节点和一个目标值，他返回以这个节点为根的树中，和为目标值的路径总数
count 函数：给他一个节点和一个目标值，他返回以这个节点为根的树中，
能凑出几个以该节点为路径开头，和为目标值的路径总数。
*/
//> PathSum 函数提供的二叉树遍历框架

function pathSum(root, sum) {
  if (root == null) return 0;
  return count(root, sum) + 
      pathSum(root.left, sum) + pathSum(root.right, sum);
}
// count 函数也是一个二叉树遍历，用于寻找以该节点开头的目标值路径。
function count( node, sum) {
  if (node == null) return 0;
  let isMe = (node.val == sum) ? 1 : 0; //加上root这个base情况
  return isMe+count(node.left, sum - node.val) + count(node.right, sum - node.val);
}



