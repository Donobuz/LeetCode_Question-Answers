// Binary Search provides Time Complexity of O(logn)
// Can only work on Ordered Arrays

let array = [10, 15, 18, 25, 80, 109, 782, 1002, 1003, 1984, 2000];
let start = 0;
let end = array.length - 1;
let target = 15;

const binarySearch = (array, start, end, target) => {

    if(start > end ){
        return false;
    }

    let midPoint = Math.floor((start + end) / 2); // find the middle point of the array
    console.log("This number is the middle of the array: " + array[midPoint]);

    if (array[midPoint] === target) {
        return true;
    }

    if (array[midPoint] > target) {
        return binarySearch(array, start, midPoint - 1, target);
    }

    else {
        return binarySearch(array, midPoint + 1, end, target)
    }

}

console.log(binarySearch(array, start, end, target));