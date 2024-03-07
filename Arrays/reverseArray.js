function reverseArray(array){
    let start = 0;
    let end = array.length - 1;

    while(start < end){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }
    return array;
}

const array2 = [1, 2, 3, 4, 5];
console.log("Original array:", array2);
console.log("Reversed array:", reverseArray(array2));