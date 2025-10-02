
// Q1: make function to lowerCase only words

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input Must Be Array");
        } else {
            const result = arr
                .filter(item => typeof item === 'string')  // for only stings
                .map(word => word.toLowerCase());          // to lower case
            resolve(result);
        }
    });
}


// test 
lowerCaseWords(mixedArray)
    .then(res => console.log(res))
    .catch(err => console.error(err));