function fizzBuzz(n) {

    let result;
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if (i > 2) {

            const divByThree = i % 3;
            const divByFive = i % 5;
            if ((divByThree === 0) && (divByFive === 0)) {
                result = 'FizzBuzz';
            } else if ((divByThree === 0) && (divByFive !== 0)) {
                result = 'Fizz';
            } else if ((divByThree !== 0) && (divByFive === 0)) {
                result = 'Buzz';
            } else {
                result = i;
            }
        } else {
            result = i;
        }
        console.log(result);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    fizzBuzz(n);
}
console.log(fizzBuzz(15));

