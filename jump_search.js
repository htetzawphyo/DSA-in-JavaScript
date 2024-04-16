function jumpSearch(arr, target){
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));

    let prev = 0;
    let curr = step;

    // Jump forward until finding a block where the target might be located
    while (curr < n && arr[curr] < target) {
        prev = curr;
        curr += step;
    }

    // Perform linear search within the block where target might be found
    for (let i = prev; i <= Math.min(curr, n - 1); i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

let num = [1,3,4,5,6,7,8,9,10];
console.log(jumpSearch(num, 6));