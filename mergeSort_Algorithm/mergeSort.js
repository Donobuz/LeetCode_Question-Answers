// Merge Sort has complexity of O(n log(n));

const mergeSort = (array) => {

    if (array.length < 2) {
        return array; // if less than 2 values in the array, array is already sorted
    }

    let midIdx = Math.floor(array.length / 2);

    const leftArray = array.slice(0, midIdx);

    const rightArray = array.slice(midIdx, array.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));

}

const merge = (leftArray, rightArray) => {

    let result = [];

    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
        if (leftArray[leftIdx] < rightArray[rightIdx]) {
            result.push(leftArray[leftIdx]);
            leftIdx++;
        }
        else {
            result.push(rightArray[rightIdx]);
            rightIdx++;
        }
    }

    console.log("This is result array: ", result);
    return result.concat(leftArray.slice(leftIdx)).concat(rightArray.slice(rightIdx));
}

let array = [12, 3, 16, 6, 5, 1];

console.log(mergeSort(array));