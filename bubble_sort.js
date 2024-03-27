class BubbleSort {
    sort(arr) {
        for(let i = 0; i < arr.length - 1; i++){
            let isSwap = false;
    
            for(let j = 0; j < arr.length - i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
    
                    isSwap = true;
                }
            }
    
            if(!isSwap){
                break;
            }
        }
    
        return arr;
    }
}

let exampleArr = [3,1,2,5,7,6,9,15,13];

let bubbleSort = new BubbleSort();
console.log(bubbleSort.sort(exampleArr));