

type Combinable = number | string;
type ConversionDesc = 'as-number' | 'as-text';

// union types will let you accept more than one type into a variable
function combine(n1: Combinable, n2: Combinable, resultConversion: ConversionDesc) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion = 'as-number') {
        return + result;
    } else {
        return result.toString();
    }

}

const combinedAges = combine(30, 39, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '39', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('John', 'Louise', 'as-text');
console.log(combinedNames);
