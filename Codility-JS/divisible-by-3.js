function solution(S) {
    let result = [];
    if (S % 3 === 0) {
        result.push(S)
    }
    for (let i = 0; i <= S.length - 1; i++) {
        const actualNumber = S.split('');
        for (let j = 0; j <= 9; j++) {
            if (actualNumber[i] !== j) {
                actualNumber[i] = j.toString()
                const temp = actualNumber.join('');
                if (temp % 3 === 0 && temp !== S) {
                    result.push(temp)
                }
            }
        }
    }
    console.log('input: ', S, '== result: ', result);
    return result.length;

}


// console.log(solution("23")); // ["03", "33", "63", "93", "21", "24", "27"]
// console.log(solution("022")); // ["222", "522", "822", "012", "042", "072", "021", "024", "027"]
// console.log(solution("0081")); // ["0081", "3081", "6081", "9081", "0381", "0681", "0981", "0021", "0051", "0084", "0087"]
