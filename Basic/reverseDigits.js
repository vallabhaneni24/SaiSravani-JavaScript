function reverseDigits(num) {
    let reversed = 0;
    while (num !== 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

// Example usage
let number = 123457;
let reversedNumber = reverseDigits(number);
console.log("Reversed number: " + reversedNumber);
