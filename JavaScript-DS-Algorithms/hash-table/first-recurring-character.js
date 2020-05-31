//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {

    if(input.length > 0){
        for(let i=0; i < input.length; i++) {
            for(let j=i+1; j < input.length; j++) {
                if(input[i] === input[j]) {
                    return input[i];
                }
            }
        }
    }
    return undefined;
} // O(n^2)

function firstRecurringCharacter2(input) {

    if(input.length > 0){
        let map = {};
        for(let i=0; i < input.length; i++) {
            if(map[input[i]] !== undefined) {
                return input[i];
            } else {
                map[input[i]] = i;
            }
        }        
    }
    return undefined;
}

// const array = [2,5,1,2,3,5,1,2,4]; // output: 2
const array = [2,1,1,2,3,5,1,2,4]; // output: 1
    // const array = [2,3,4,5]; // output: undefined
console.log('first recurring: ', firstRecurringCharacter(array));
console.log('first recurring2: ', firstRecurringCharacter2(array));
