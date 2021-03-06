// 454. åæ°ç¸å  II
/* 
ððððð
ç»å®åä¸ªåå«æ´æ°çæ°ç»åè¡¨Â A , B , C , D ,è®¡ç®æå¤å°ä¸ªåç» (i, j, k, l)Â ï¼ä½¿å¾Â A[i] + B[j] + C[k] + D[l] = 0ã
è¾å¥:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

è¾åº:
2

è§£é:
ä¸¤ä¸ªåç»å¦ä¸:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

var A = [1, 2],
	B = [-2, -1],
	C = [-1, 2],
	D = [0, 2]

// åç»+åå¸è¡¨
var fourSumCount = function (A, B, C, D) {
	const count = new Map()
	A.forEach((u) => B.forEach((v) => count.set(u + v, (count.get(u + v) || 0) + 1)))
	let ans = 0
	for (let u of C) {
		for (let v of D) {
			if (count.has(-u - v)) {
				ans += count.get(-u - v)
			}
		}
	}
	return ans
}

// ç±äºäºç»´æ°ç»å¤ªå¤§ï¼çæ äºï¼ N>20å°½éå°±ä¸è¦ç¨DFSäº
var fourSumCount = function (A, B, C, D) {
	let res = 0
	let visited = new Set()
	let track = []
	let list = [A, B, C, D]
	if (list.flat().length === 0) {
		return 0
	} //æ°ç»éç»´
	let level = 0

	function backtrack(track, level) {
		if (track.length === 4) {
			if (track.reduce((pre, cur) => pre + cur) == 0) {
				res++
				return
			}
			return
		}
		if (level > 3) {
			return
		}
		let cur = list[level]
		for (let i = 0; i < cur.length; i++) {
			if (visited.has(`${level}-${i}`)) {
				continue
			}
			visited.add(`${level}-${i}`)
			track.push(cur[i])
			// è¿å¥ä¸ä¸å±å³ç­æ 
			level += 1
			backtrack(Array.from(track), level)
			// æ¤é
			level -= 1
			track.pop()
			visited.delete(`${level}-${i}`)
		}
	}

	backtrack(track, level)
	return res
}
