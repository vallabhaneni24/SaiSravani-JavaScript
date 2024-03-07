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

function printArray(array) {
    console.log(array.join(' '));
}

// Example usage
let numbers = [5, 2, 8, 1, 7, 3, 6];
console.log("Original Array:");
printArray(numbers);

bubbleSort(numbers);

console.log("\nArray after sorting:");
printArray(numbers);