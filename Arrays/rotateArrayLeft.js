function rotateArrayLeft(array, positions) {
    let n = array.length;
    reverseArray(array, 0, positions - 1);
    reverseArray(array, positions, n - 1);
    reverseArray(array, 0, n - 1);
}

function reverseArray(array, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }
}

function printArray(array) {
    console.log(array.join(' '));
}

let array = [1, 2, 3, 4, 5, 6, 7];
let rotateBy = 2;

console.log("Original Array:");
printArray(array);

rotateArrayLeft(array, rotateBy);

console.log("\nArray after left rotation by " + rotateBy + " positions:");
printArray(array);
