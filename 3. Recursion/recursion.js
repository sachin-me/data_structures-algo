//1. Write a function that loops through the numbers n down to 0.

function countTo(n) {
    console.log(n);
    if (n > 0) {
        countTo(--n);
    }
}
console.log(countTo(10));


//2. Write a function countTo that takes one argument limit and prints number from 0 to limit

function countTo(i, limit) {
    console.log(i);
    if (i >= limit) return;
    countTo(++i, limit);
}
countTo(0, 10);

//3. Write a function 'exponent' that takes two arguments base, and expo,
//uses a while loop to return the exponenet value of the base.

function exponenet(n, pow) {
    console.log(n);
    while(n >= pow) {
       return;
    }
    
    return exponenet(n**pow, pow)
}
console.log(exponenet(2, 10));


//4. Write a function factorial that take 1 argument 'number' and gives the factorial of the number.

function factorial(n) {
    if (n < 0) return;
    if (n == 0) return 1;
    return (n * factorial(--n));
}
console.log(factorial(5));


//5. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(n, pow) {
    console.log(n);
    if(n >= pow) return;
    return recursiveExponent((n ** pow), pow)
}
console.log(recursiveExponent(2, 10));

//6. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num'
// and multiplies each arr value into by num and returns an array of the values.

var arr = [2, 4, 5, 6];
function recursiveMultiplier(arr, num) {
    if(arr < arr.length) return;
    return (num * arr)
}


// 7. Write a function 'recursiveReverse' that takes an array and uses recursion
// to return its contents in reverse

function recursiveReverse(arr) {
    var str = arr;
    if (str = "") return ' ';
    let reverseStr = (str.slice(1) + str[0]);
    recursiveReverse(reverseStr);
    console.log(str);
}
console.log(recursiveReverse(["sachin", "mickey"]))