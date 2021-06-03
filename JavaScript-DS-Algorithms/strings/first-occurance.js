firstOccurance(input) {
    let uniqueArray = [];
    const obj = new Map();

    for (let int i = 0; i < input.length - 1; i++)) {//i=2, p
        if (obj.has(input[i])) {
            obj.set(input[i], obj.get(input[i]) + 1)
        } else {
            obj.set(input[i], 1);
        }
    }

    for (let int i = 0; i < input.length - 1; i++)) {
        if (obj.get(input[i]) === 1) {
            return input[i];
        }
    }

    return uniqueArray[0];
}