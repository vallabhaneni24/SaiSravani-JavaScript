function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
const exampleStr = "Hello, World!";
const vowelCount = countVowels(exampleStr);
console.log(`Number of vowels: ${vowelCount}`); // Output: Number of vowels: 3
