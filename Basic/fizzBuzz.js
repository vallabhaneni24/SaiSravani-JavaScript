for (let i = 1; i <= 100; i++) {
    // Checking if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Checking if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Checking if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If none of the above conditions are true, just printing the number
    else {
        console.log(i);
    }
}
