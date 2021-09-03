/**
 * 使用BFS寻找最短路径：给定一个图G和顶点v，找出每个顶点u和v之间最短的路径（以边的数量计）。对于给定的顶点，广度优先算法会
 * 访问所有与其距离为1的顶点，接着是距离为2的顶点，以此类推。所以，可以用广度优先算法来解决这个问题，我们可以修改breadFirstSearch
 * 方法以返回给我们一些信息。
 *
 * - 从 v 到 u 的距离 distances[u]
 * - 前溯点 predecessors[u] ，用来推导出从 v 到其他每个顶点 u 的最短路径
 */

import { initializeColor, Queue, Graph } from "./graph_basics";
import { Stack } from "../ch4_stack/stack_basics";

const Colors = {
  WHITE: 0, // 表示该顶点还没有被访问
  GREY: 1, // 表示该顶点被访问过，但并未被探索过
  BLACK: 2, // 表示该顶点被访问过且被完全探索过
};

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();

  const adjList = graph.getAdjList();

  const color = initializeColor(vertices);

  const queue = new Queue();

  const distances = {}; // 存储距离

  const predecessors = {}; // 前溯点

  queue.enqueue(startVertex);

  // 初始化，用0来初始化distances，用null来初始化predecessors。
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        // 通过给distances[u] + 1来增加v和w之间的距离（u是w的前溯点，distances[u]值已经有了）
        distances[w] = distances[u] + 1;
        // 当我们发现顶点u的相邻顶点w时，则设置w的前溯点值为u。
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
};

const _graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  _graph.addVertex(myVertices[i]);
}
_graph.addEdge("A", "B");
_graph.addEdge("A", "C");
_graph.addEdge("A", "D");
_graph.addEdge("C", "D");
_graph.addEdge("C", "G");
_graph.addEdge("D", "G");
_graph.addEdge("D", "H");
_graph.addEdge("B", "E");
_graph.addEdge("B", "F");
_graph.addEdge("E", "I");

const shortestPathA = BFS(_graph, myVertices[0]);
console.log(shortestPathA);

// distances: [A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3]
// 这意味着顶点 A 与顶点 B、C 和 D 的距离为 1；与顶点 E、F、G 和 H 的距离为 2；与顶点 I 的距离为 3。
// predecessors: [A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H: "D", I: "E"]

// 通过前溯点对象，我们可以用下面的这段代码来构建从顶点A到其他顶点的路径：

// 我们用顶点 A 作为源顶点
const fromVertex = myVertices[0];
// 对于其他顶点，我们会计算顶点 A 到它的路径
for (let i = 1; i < myVertices.length; i++) {
  // 从myVertices数组得到值，然后创建一个栈来存储路径值
  const toVertex = myVertices[i];
  const path = new Stack();
  // 接着，我们追溯 toVertex 到fromVertex的路径。
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    // 变量 v 被赋值为其前溯点的值，这样我们能够反向追溯这条路径，将变量添加到栈中。
    path.push(v);
  }

  // 最后，源顶点也会被添加到栈中，以得到完整路径
  path.push(fromVertex);
  // 创建一个s字符串，并将源顶点赋值给它（它是最后一个加入栈中的，所以是第一个被弹出的项）
  let s = path.pop();
  while (!path.isEmpty()) {
    // 当栈是非空的，我们就从栈中移出一个项并将其拼接到字符串s的后面
    s += " - " + path.pop();
  }
  // 最后打印出来
  console.log(s);
}

/**
  A - B 
  A - C 
  A - D 
  A - B - E 
  A - B - F 
  A - C - G 
  A - D - H 
  A - B - E - I
 */
