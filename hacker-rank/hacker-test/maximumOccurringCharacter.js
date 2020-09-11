function maximumOccurringCharacter(text) {
    // Write your code here
    let result = {};
    const charArray = text.split('');

    for (let i = 0; i < charArray.length; i++) {
        if (result.hasOwnProperty(charArray[i])) {
            result[charArray[i]]++;
        } else {
            result[charArray[i]] = 1;
        }
    }
    // console.log('result: ', result);

    let max = 0;
    let charResult;
    for (let char in result) {
        // console.log('char: ', result[char]);
        if (result[char] > max) {
            max = result[char];
            charResult = char;
        }

    }
    return charResult;
}

// const text = 'helloworld';
const text = 'cbbbbccc';
console.log('maximumOccurringCharacter: ', maximumOccurringCharacter(text));