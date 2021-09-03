/**
 * 图的遍历：和数这种数据结构类似，我们可以访问图的所有节点。图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查如是否连通，检查图是否有环等等。
 * 图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。
 *
 * 完全探索一个顶点要求我们查看该顶点的每一条边，对于每一条边所连接的没有被访问过的顶点，将其标注为被发现的，并将其加入到待访问的顶点列表中。
 *
 * 为了保证算法的效率，每个顶点最多被访问两次。连通图中每条边和顶点都会被访问到。图的遍历常用到的两个算法是：广度优先和深度优先算法。这两个算法基本上
 * 是相同的，只有一点不痛，那就是待访问顶点列表的数据结构。
 *
 *      |  算法          |    数据结构      |     描述
 *      |----------------------------------------------------------------------------------------------------
 *      |  深度优先算法   |      栈         |     将顶点存入栈，顶点是沿着路径被探索的，存在新的相邻顶点就去访问
 *      |  广度优先算法   |      队列       |     将顶点存入队列，最先入队的顶点先被探索
 *      -----------------------------------------------------------------------------------------------------
 * 当要标注已经访问过的顶点时，我们用三种颜色来反映它们的状态
 * - 白色：表示该顶点还没有被访问
 * - 灰色：表示该顶点被访问过，但并未被探索过
 * - 黑色：表示该顶点被访问过且被完全探索过
 * **************************************这就是之前提到的务必访问每个顶点最多两次的原因。
 */

import { Queue } from "../ch5_queue/queue_basics";

// 为了有助于在广度优先和深度优先算法中标记顶点，我们要使用Colors变量（作为一个枚举器）
const Colors = {
  WHITE: 0, // 表示该顶点还没有被访问
  GREY: 1, // 表示该顶点被访问过，但并未被探索过
  BLACK: 2, // 表示该顶点被访问过且被完全探索过
};

// 两个算法还需要一个辅助对象来帮助存储顶点是否被访问过，在每个算法的开头，所有的顶点会被标记为未访问（白色）。
export const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

/**
 * 广度优先算法：从第一个顶点开始遍历图，先访问其所有的相邻顶点，就像一次访问图的一层。换句话说，就是先宽后深地访问顶点。
 *
 * 它的主要步骤如下：
 *
 * - 1，创建一个队列！Q；
 * - 2，标注v为被发现的（灰色），并将v入队列Q；
 * - 3，如果Q非空，则运行以下步骤：
 *   - 3-1，将u从Q中出队；
 *   - 3-2，标注u为被发现（灰色）；
 *   - 3-3，将u所有未被访问过的相邻顶点（白色）入队
 *   - 3-4，标注u为已被探索的（黑色）
 */

export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  // 将color数组初始化为白色
  const color = initializeColor(vertices);

  const queue = new Queue();

  // 接收一个图实例和顶点作为算法的起始点，起始点是必要的，我们将此顶点入队。
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    // 如果队列非空，我们从队列出队一个顶点
    const u = queue.dequeue();
    // 取得这个顶点所有的相邻顶点的邻接表
    const neighbors = adjList.get(u);
    // 将该顶点标记为灰色，表示我们发现了它（但还未完成对其的探索）。
    color[u] = Colors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      // 对于u的每个相邻顶点，我们取得其值，如果它还未被访问过（颜色为白色），则将其标注为我们已经发现了它（颜色置灰），
      // 并将其加入到队列中。这样，当其从队列中出列的时候，我们可以完成对其的探索。
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }

    // 当完成探索该顶点和其相邻顶点后，我们将该顶点标注为已探索过的（颜色置为黑色）
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
};

const printVertex = (value) => console.log("Visited vertex: " + value); // {15}
breadthFirstSearch(_graph, myVertices[0], printVertex);

/**
  Visited vertex: A 
  Visited vertex: B 
  Visited vertex: C 
  Visited vertex: D 
  Visited vertex: E 
  Visited vertex: F 
  Visited vertex: G 
  Visited vertex: H 
  Visited vertex: I
 */
