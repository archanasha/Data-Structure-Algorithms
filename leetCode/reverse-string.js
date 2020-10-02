function solution(s) {
    return s.reverse();
    // return s.split('').reverse().join('');
}
const s = ['h', 'e', 'l', 'l', 'o'];
const reversed = solution(s);
// console.log(reversed)

function solution1(s) {
    let left = 0;
    let right = s.length - 1;
    let temp;
    while (left < right) {
        temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }
    return s;
}
const s1 = ['h', 'e', 'l', 'l', 'o'];
// const s1 = ['m', 'o', 'n', 'd', 'a', 'y'];
const reversedSwap = solution1(s1);
console.log(reversedSwap)

function solution2(s) {
    helper(s, 0, s.length - 1)
    return s;
}

function helper(s, left, right) {
    if (left >= right)
        return;
    const temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
    helper(s, left, right);
}

const s2 = ['m', 'o', 'n', 'd', 'a', 'y'];
const reversedRecurrsion = solution2(s2);
console.log(reversedRecurrsion)

/**
  * reverseString: Time is better than 98.2% & Space is better than 100%
  * @param {character[]} s
  * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString1 = function (s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        const left = s[i], right = s[j];
        s[i] = right;
        s[j] = left;
    }
    return s;
};
const s3 = ['s', 'u', 'n', 'd', 'a', 'y'];
console.log(reverseString1(s3))

var reverseString2 = function (s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        [s[j], s[i]] = [s[i], s[j]];
    }
    return s;
};

const s4 = ['s', 'a', 't', 'u', 'r', 'n'];
console.log(reverseString2(s4))