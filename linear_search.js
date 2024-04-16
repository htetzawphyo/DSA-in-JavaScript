function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) return i;
    }
}

let num = [1,3,4,5,6,7,8,9,10];
console.log(linearSearch(num, 1));