function wordsWithVowels(input) {

    let result;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const splitArray = input.split(' ');
    // Write your code here
    for (let i = 0; i < splitArray.length; i++) {
        let count = 0;
        result = '';
        for (let j = 1; j < splitArray[i].length; j++) {
            if (vowels.includes(splitArray[i][j - 1]) && vowels.includes(splitArray[i][j + 1])) {
                count++;
                result = splitArray[i];
            }
        }
        if (result !== '') {
            console.log(result + '(' + count + ')');
        }
    }

}

// const input = 'opentext internship program';
const input = 'people are friendly in hyderabad';
console.log(wordsWithVowels(input));