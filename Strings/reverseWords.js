function reverseWords(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Reverse each word in the array
    const reversedWords = words.map(word => reverseWord(word));
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  function reverseWord(word) {
    // Convert the word to an array of characters, reverse it, and join back into a string
    return word.split('').reverse().join('');
  }
  
  // Example usage
  const inputSentence = "Java J2EE Reverse Me";
  const outputSentence = reverseWords(inputSentence);
  console.log(outputSentence);
  