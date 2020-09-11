function wordsFollowedByNumber(input) {
    // Write your code here
    var hasNumber = /\d/;
    if (!hasNumber.test(input)) {
        console.log('None');
        return
    }
    const textArray = input.split(' ');
    for (let i = 0; i < textArray.length; i++) {
        let sum = 0;
        for (let j = 0; j < textArray[i].length; j++) {
            if (!isNaN(parseInt(textArray[i][j]))) {
                sum += parseInt(textArray[i][j]);
            }
        }
        console.log(textArray[i] + ' (' + sum + ')')
    }
}

const text = 'ta1s2te the th34under';
// const text = 'all is well'
wordsFollowedByNumber(text);