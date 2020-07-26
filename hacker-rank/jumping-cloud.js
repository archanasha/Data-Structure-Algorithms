
function jumpingCloud(c) {

    let counter = 0;
    let i = 0;
    while (i < c.length - 1) {

        if (i + 2 === c.length || c[i] === 1) {
            i++;
            counter++;
        } else {
            i += 2;
            counter++;
        }

    }
    return counter;
}

const c = [0, 0, 1, 0, 0, 1, 0]
// const c = [0,0, 0, 0, 1, 0]

const minJumps = jumpingCloud(c);
console.log('jumpingCloud: ', minJumps);


