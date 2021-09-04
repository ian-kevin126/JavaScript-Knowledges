/**
 * 深度优先遍历：将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问，接着原路回退并探索下一条路径。
 * 换句话说，它是先深度后广度地访问顶点。深度优先搜索算法不需要一个源顶点，在深度优先搜索算法中，若图中顶点v未访问，则
 * 访问该顶点v。
 *
 * 要访问顶点v，照如下步骤：
 * - 1，标注v为被发现的（灰色）
 * - 2，对于v的所有未访问（白色）的邻点w，访问顶点w
 * - 3，标注v为已被探索的（黑色）
 *
 * 深度优先搜索算法的步骤是递归的，这意味着深度优先搜索算法使用栈来存储函数调用（由递归调用所创建的栈）。
 */
// import Graph from '../../data-structures/graph';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  // console.log('Discovered ' + u);
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[u] = Colors.BLACK;
  // console.log('explored ' + u);
};

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

/**
 * 探索深度优先算法：上面我只是展示了深度优先搜索算法的工作原理。我们可以利用该算法做更多的事，而不只是输出被访问顶点的顺序。
 *
 * 对于给定的图G，我们希望深度优先搜索算法遍历图G的所有节点，构建“森林”（有根树的一个集合）以及一组源顶点（根），并输出两个数组：
 * 发现时间和完成探索时间。我们可以修改 depthFirstSearch函数来返回一些信息：
 *
 * - 顶点 u 的发现时间 d[u];
 * - 当顶点 u 被标注为黑色时，u 的完成探索时间 f[u];
 * - 顶点 u 的前溯点 p[u]
 */
export const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {}; // 发现时间
  const f = {}; // 探索时间
  const p = {}; // 前溯点
  // 我们声明一个时间对象time，包含count属性，这根JavaScript中的方法按值或按引用传递参数有关。在一些语言中，按值或按引用传递参数是有区别的。
  // 原始数据类型是按值传递的，也就是说值的作用域只存在于函数的执行过程中。如果修改了值，只会在函数的作用域内生效。如果参数以引用形式（对象）
  // 传递，并修改了对象中的任意属性，将会影响对象的原始值。对象以引用形式传递是因为只有内存的引用被传给了函数或方法。在这个例子中，我们希望
  // 次数统计在这个算法执行过程中是全局使用的，所以需要将参数以对象传递，而不是原始值。
  const time = { count: 0 };

  // 初始化
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};

/**
 *
 * @param {*} u
 * @param {*} color
 * @param {*} d
 * @param {*} f
 * @param {*} p
 * @param {*} time
 * @param {*} adjList
 */
const DFSVisit = (u, color, d, f, p, time, adjList) => {
  // console.log('discovered ' + u);
  color[u] = Colors.GREY;

  // 当一个顶点第一次被发现时，我们追踪其发现时间
  d[u] = ++time.count;
  const neighbors = adjList.get(u);

  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      // 当它是由引自顶点u的边而被发现的，我们追踪它的前溯点。
      p[w] = u;
      // 最后，当这个顶点被完全探索后，我们追踪其完成时间
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }

  color[u] = Colors.BLACK;
  f[u] = ++time.count;
  // console.log('explored ' + u);
};

/**
 * 深度优先算法背后的思想是什么？边是从最近发现的顶点u处被向外探索的，只有连接到未发现的顶点的边被探索了。当u所有的边都被探索了，该
 * 算法回退到u被发现的地方去探索其他的边。这个过程持续到我们发现了所有从原始顶点能触及的顶点。如果还留有任何其他未被发现的顶点，
 * 我们对新源顶点重复这个过程。重复该算法，直到图中所有的顶点都被探索了。
 *
 * 对于改进过的深度优先搜索算法，有两点需要我们注意：
 * - 时间（time）变量值的范围只可能在图顶点数量的一倍到两倍（2|V|）之间；
 * - 对于所有的顶点u，d[u]<f[u]（意味着，发现时间的值比完成时间的值小，完成时间意思是所有顶点都已经被探索过了）
 */
