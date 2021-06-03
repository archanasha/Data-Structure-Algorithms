var maxNumberOfFamilies = function (n, reservedSeats) {
    const seats = new Map();
    for (res of reservedSeats) {
        if (!seats.has(res[0])) {
            seats.set(res[0], new Set());
        }
        seats.get(res[0]).add(res[1]);
    }
    let ans = n * 2;
    seats.forEach(row => {
        let empty = 0, aval = 0;
        for (let col = 2; col <= 9; col++) {
            if (row.has(col)) {
                empty = 0;
                continue;
            }
            if (++empty >= 4 && col !== 6 && col !== 8) {
                empty = 0;
                aval++;
            }
        }
        ans -= 2 - aval;
    })
    return ans;
};