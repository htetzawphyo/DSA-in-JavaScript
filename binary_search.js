function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(target === arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return -1;
}

let num = [1,2,3,4,5,6,12,15,19,21,24,38];
console.log(binarySearch(num, 5));