function bubbleSort(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {

            // Swap elements if they are in the wrong order
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            }
        }
    }
}
  
function binarySearch(array, target) {
    bubbleSort(array);
    console.log("\nSorted Array  :");
    printArray(array);

    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
  
      if (array[mid] === target) {
        return mid; // Element found
      } else if (array[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Element not found
}

function printArray(array) {
    console.log(array.join(' '));
}
  
// Example usage
let numbers = [1, 3, 2, 7, 4, 6, 5, 8, 9];
let target = 5;
  
console.log("Original Array:");
printArray(numbers);
  
let index = binarySearch(numbers, target);
  
if (index !== -1) {
    console.log(`\nElement ${target} found at index: ${index}`);
} else {
    console.log(`\nElement ${target} not found in the array.`);
}
  