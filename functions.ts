function add(n1: number, n2: number) {
    return n1 + n2;
}

// use void for functions when they are not returning anything,
// or if you want a return statement, you can put undefined and then return blank;
function printResults(num: number): void {
    console.log('Result:', num);
    
}

// void will ignore any return values from this function call
function addAndHandle(n1:number, n2:number, cb: (num:number) => void) {
    const result = n1+n2;
    cb(result);
}

// you can use undefined for variables with no return value though
printResults(add(5,12));

// Prevents runtime error
let combineValues: (a: number, b: number) => number;
combineValues = add;
// let combineValues: Function
// prevents this kind of error
// combineValues=5;
// Prevent this since this function does not take in two parameters
// combineValues = printResults;

console.log(combineValues(8,8));

addAndHandle(10,29, (result) => {
    console.log(result);
});

