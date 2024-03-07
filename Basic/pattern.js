function printPattern(n) {
    for (let i = n-1; i >= 0; i--) {
        let line = '';
        for (let j = 0; j <= n; j++) {
            if (j >= i) {
                line += "-";
            } else {
                line += "+";
            }
        }
        console.log(line);
    }
}

// Call the function to print the pattern
printPattern(5);
