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

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  // console.log('discovered ' + u);
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
  // console.log('explored ' + u);
};

export const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 };
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
