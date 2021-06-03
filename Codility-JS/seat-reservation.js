var maxNumberOfFamilies = function (n, S) {
    let total = 0
    let obj = {}

    let reservedSeats = S
    //.split(' ');
    console.log('s-----', reservedSeats)

    for (let seat of reservedSeats) {
        if (!obj[seat[0]]) {
            obj[seat[0]] = []
        }
        obj[seat[0]][seat[1]] = true
    }
    console.log('map-----', obj)
    let count = 0
    for (let key in obj) {
        if (!obj[key][2] && !obj[key][3] && !obj[key][4] && !obj[key][5]) {
            total++
            if (!obj[key][6] && !obj[key][7] && !obj[key][8] && !obj[key][9]) {
                total++
            }
        } else if (!obj[key][4] && !obj[key][5] && !obj[key][6] && !obj[key][7]) {
            total++
        } else if (!obj[key][6] && !obj[key][7] && !obj[key][8] && !obj[key][9]) {
            total++
        }
        count++
    }
    total += (n - count) * 2
    return total
};


// Input: n = 4,
//     reservedSeatsI = [[4, 3], [1, 4], [4, 6], [1, 7]]

// Input: n = 2,
//     reservedSeatsI = '1A 2F 1C'  

Input: n = 2, reservedSeatsI = [[2, 1], [1, 8], [2, 6]]


console.log(maxNumberOfFamilies(n, reservedSeatsI));
