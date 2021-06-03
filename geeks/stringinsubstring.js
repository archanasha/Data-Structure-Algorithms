function isSubstring(s1, s2) {
    var M = s1.length;
    var N = s2.length;

    /* A loop to slide pat[] one by one */
    for (var i = 0; i <= N - M; i++) {
        var j;

        /* For current index i, check for
 pattern match */
        for (j = 0; j < M; j++)
            if (s2[i + j] != s1[j])
                break;

        if (j == M)
            return i;
    }

    return -1;
}

const s1 = 'geeksforgeeks';
const s2 = 'for'
console.log(isSubstring(s1, s2));