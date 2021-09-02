/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  class UnionFind {
    constructor(size = 0) {
      this._size = size
      this._rank = new Array(size).fill(1)
      this._parent = new Array(size).fill(1).map((it, index) => index)
    }

    getSize() {
      return this._size
    }

    union(p, q) {
      let pRoot = this._find(p)
      let qRoot = this._find(q)
      if (this._rank[pRoot] > this._rank[qRoot]) {
        this._parent[qRoot] = pRoot
      } else if (this._rank[pRoot] < this._rank[qRoot]) {
        this._parent[pRoot] = qRoot
      } else {
        this._parent[pRoot] = qRoot
        this._rank[qRoot]++
      }
    }

    isConnected(p, q) {
      let pRoot = this._find(p)
      let qRoot = this._find(q)
      return pRoot === qRoot
    }

    _find(p) {
      if (p >= this.getSize() || p < 0) {
        throw new Error('out of bound')
      }
      while (this._parent[p] !== p) {
        this._parent[p] = this._parent[this._parent[p]]
        p = this._parent[p]
      }
      return p
    }
  }

  let len = M.length
  let friendCircles = new UnionFind(len)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (M[i][j] === 1) {
        friendCircles.union(i, j)
      }
    }
  }
  return friendCircles._parent.filter((it, index) => it === index).length
}