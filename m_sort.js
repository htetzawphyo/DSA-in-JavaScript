function mergeSort(arr) {
    let length = arr.length;
    if(length === 1) return arr;

    const middle = Math.floor(arr.length / 2);
    let l1 = arr.slice(0, middle);
    let l2 = arr.slice(middle); // arr.slice(middle to length)

    return l2;
}

console.log(mergeSort([2,1,4,6,7]));


