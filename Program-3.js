
function generateSeries(a) {
    const count = a % 2 === 0 ? a - 1 : a;
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(2 * i + 1);
    }
    return result;
}


console.log(generateSeries(6)); 
console.log(generateSeries(2)); 
