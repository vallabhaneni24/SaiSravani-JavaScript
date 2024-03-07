function categorizeAge(age) {
    if (age < 0) {
        console.log("Invalid Age");
    } else if (age >= 0 && age < 13) {
        console.log('kid');
    } else if (age >= 13 && age <= 19) {
        console.log('teen');
    } else {
        console.log('adult');
    }
}

categorizeAge(-2);
categorizeAge(10); // Expected output: kid
categorizeAge(15); // Expected output: teen
categorizeAge(25); // Expected output: adult
