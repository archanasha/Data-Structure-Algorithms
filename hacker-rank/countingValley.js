
function countingValley(n, s) {

    let valleyCount = 0;
    let currentLevel = 0;
    for (const step of s) {
        if (step === 'U') {
            currentLevel += 1;
            if (currentLevel === 0) {
                valleyCount++;
            }
        } else {
            currentLevel -= 1;

        }
    }

    return valleyCount;

}



// const n = 8
// const s = 'UDDDUDUU'
const n = 12
const s = 'DDUUDDUDUUUD'
const countValley = countingValley(n, s);
console.log('countValley: ', countValley);