
function add(n1: number, n2: number, showResults: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResults) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

let number1: number;
number1 = 5;
const number2 = 11.5;
const printResult = true;

let resultPhrase = "Answer is: ";

const result = add(number1, number2, printResult, resultPhrase);




