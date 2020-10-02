function fizzBuzz(n) {

    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i > 1) {

            const divByThree = i % 3;
            const divByFive = i % 5;
            if ((divByThree === 0) && (divByFive === 0)) {
                result.push('FizzBuzz');
            } else if ((divByThree === 0) && (divByFive !== 0)) {
                result.push('Fizz');
            } else if ((divByThree !== 0) && (divByFive === 0)) {
                result.push('Buzz');
            } else {
                result.push(i.toString());
            }
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

function fizzBuzz1(n) {

    let result = [];
    let i = 1;
    while (i <= n) {
        if (i > 1) {
            const divByThree = i % 3;
            const divByFive = i % 5;
            if ((divByThree === 0) && (divByFive === 0)) {
                result.push('FizzBuzz');
            } else if ((divByThree === 0) && (divByFive !== 0)) {
                result.push('Fizz');
            } else if ((divByThree !== 0) && (divByFive === 0)) {
                result.push('Buzz');
            } else {
                result.push(i.toString());
            }
        } else {
            result.push(i.toString());
        }
        i++;
    }
    return result;
}

console.log(fizzBuzz(5));

