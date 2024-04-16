function fibonacciSearch(arr, target){
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fib = fibMinus1 + fibMinus2;

    // Find the smallest Fibonacci number greater than or equal to array length
    while(fib < arr.length){
        fibMinus2 = fibMinus1;
        fibMinus1 = fib;
        fib = fibMinus1 + fibMinus2;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fibMinus2, arr.length - 1);

        // If target is greater than the value at index i, move fib sequence two steps down
        if (arr[i] < target) {
            fib = fibMinus1; // 8
            fibMinus1 = fibMinus2; // 5
            fibMinus2 = fib - fibMinus1; // 3
            offset = i; // 4
        }
        // If target is less than the value at index i, move fib sequence one step down
        else if (arr[i] > target) {
            fib = fibMinus2; // 3
            fibMinus1 = fibMinus2 - 1; // 2
            fibMinus2 = fib - fibMinus1; // 1
        }
        else {
            return i;
        }
    }
    return -1;
}

let num = [1,3,4,5,6,7,8,9,10];
console.log(fibonacciSearch(num, 7));