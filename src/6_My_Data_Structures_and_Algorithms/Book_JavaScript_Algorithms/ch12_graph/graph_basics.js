/**
 * 图：是网络结构的抽象模型，图是一组由边连接的节点（或顶点）。
 *
 *                           A
 *                        /  \   \
 *                      B     C —— D
 *                     / \     \  /  \
 *                    E   F      G    H
 *                    |
 *                    I
 *
 * 相邻顶点：由一条边连接在一起的顶点
 * 度：一个顶点相邻的顶点的数量
 * 路径：顶点组成的一个连续序列，比如ABEI、ACDG，简单的路径要求不包含重复的顶点。环也是一个简单路径，比如ADCA
 * 无环的：图中不存在环；连通的：图中每两个顶点间都存在路径。
 *
 * 有向图：图的边有一个方向
 * 无向图：图的边没有方向
 *
 * 强连通：图中每两个顶点间在双向上都存在路径
 * 加权的：图的边被赋予了权值
 *
 * 我们可以使用图来解决计算机科学世界中的很多问题，比如搜索图中的一个特定顶点或搜索一条特定的边，寻找图中的一条路径（从一个顶点到另一个顶点），
 * 寻找两个顶点之间的最短路径，以及环检测。
 *
 * 图的表示：
 * - 1，邻接矩阵
 * - 2，邻接表
 * - 3，关联矩阵：关联矩阵中，矩阵的行表示顶点，列表示边，使用二维数组来表示两者之间的连通性，如果顶点v是边e的入射点，则 array[v][e] === 1，否则 array[v][e] === 0
 *
 *                  邻接矩阵                                       邻接表                                     关联矩阵
 *
 *       A  B  C  D  E  F  G  H  I                             A | B  C  D                            v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
 *    A  0  1  1  1  0  0  0  0  0                             B | A  E  F                          A  1  1  1  0  0  0  0  0  0  0
 *    B  1  0  0  0  1  1  0  0  0                             C | A  D  G                          B  1  0  0  0  1  1  0  0  0  0
 *    C  1  0  0  1  0  0  1  0  0                             D | A  C  G  H                       C  0  1  0  1  0  0  0  1  0  0
 *    D  1  0  1  0  0  0  1  1  0                             E | B  I                             D  0  0  1  1  0  0  0  0  1  1
 *    E  0  1  0  0  0  0  0  0  1                             F | B                                E  0  0  0  0  1  0  1  0  0  0
 *    F  0  1  0  0  0  0  0  0  0                             G | C  D                             F  0  0  0  0  0  1  0  0  0  0
 *    G  0  0  1  1  0  0  0  0  0                             H | D                                G  0  0  0  0  0  0  0  1  1  0
 *    H  0  0  0  1  0  0  0  0  0                             I | E                                H  0  0  0  0  0  0  0  0  0  1
 *    I  0  0  0  0  1  0  0  0  0                                                                  I  0  0  0  0  0  0  1  0  0  0
 *
 */

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  keyValues() {
    return Object.values(this.table);
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

export class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; // 默认情况下，图的无向的。
    this.vertices = []; // 用数组来存储图中的所有顶点的名字
    this.adjList = new Dictionary(); // 用一个字典来存储邻接表
  }

  // 向图中添加新的顶点
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      // 只有这个顶点不在图中的时候,我们将该顶点添加到顶点列表中,并且在邻接表中,设置顶点v作为键对应的字典值，为一个空数组。
      this.vertices.push(v);
      this.adjList.set(v, []); // 初始化一个邻接表为空数组
    }
  }

  // 添加顶点之间的边
  addEdge(a, b) {
    // 在连接顶点之前，需要验证顶点是否在于图中，如果不在，需要将它们加入顶点列表。
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b);
    }

    // 然后，我将b加入到a的邻接表中，形成了一条边。
    this.adjList.get(a).push(b);
    if (!this.isDirected) {
      // 如果是无向图，还需要将a添加到b的邻接表中
      this.adjList.get(b).push(a);
    }
  }

  // 返回顶点列表
  getVertices() {
    return this.vertices;
  }

  // 返回邻接表
  getAdjList() {
    return this.adjList;
  }

  // 输出邻接表
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += "\n";
    }
    return s;
  }
}

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

console.log(_graph.toString());

/**
  A -> B C D 
  B -> A E F 
  C -> A D G 
  D -> A C G H 
  E -> B I 
  F -> B 
  G -> C D 
  H -> D 
  I -> E 
 */

function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
