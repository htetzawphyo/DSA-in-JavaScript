function exponentialSearch(arr, target){
    let bound = 1;
    while(bound < arr.length && arr[bound] < target){
        bound *= 2;
    }

    let low = Math.floor(bound / 2);
    let high = Math.min(bound, arr.length - 1);

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }

    return -1;
}

let num = [1,3,5,7,9,11,13];
console.log(exponentialSearch(num, 7));