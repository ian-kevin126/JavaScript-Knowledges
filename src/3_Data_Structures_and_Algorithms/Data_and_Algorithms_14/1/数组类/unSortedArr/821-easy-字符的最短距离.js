// 821 easy 字符的最短距离

// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
//
// 示例 1:
// 输入: S = "loveleetcode", C = 'e'
// 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// 说明:
// 字符串 S 的长度范围为 [1, 10000]。
// C 是一个单字符，且保证是字符串 S 里的字符。
// S 和 C 中的所有字母均为小写字母。
//


/**
 * 暴力法
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    // 记录每一个 C字符在S串中出现的位置index
    let posArr = []
    for(let i = 0; i < S.length; i++){
        if (S[i] === C){
            posArr.push(i);
        }
    }

    let result = []
    for(let i = 0; i < S.length; i++){
        let min = S.length; // 以最大可能数字 设定最小值
        for(let j = 0; j < posArr.length; j++){
            // 更新最小值
            if(Math.min(posArr[j] - i) < min){
                min = Math.min(posArr[j] - i)
            }
        }
        result.push(min)
    }
    return result
};

console.log(shortestToChar('loveleetcode', 'e'))