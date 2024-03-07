function moveZeroesToEnd(nums) {
    let insertPos = 0;

    for (let num of nums) {
        if (num !== 0) {
            nums[insertPos++] = num;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }

    return nums;
}

let numbers = [0, 1, 0, 3, 12];
moveZeroesToEnd(numbers);
console.log(numbers);
