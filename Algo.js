function processSentence(sentence) {
    let wordCount = 0;
    let vowelCount = 0;
    let charCount = 0;

    // Split the sentence into words using a space as a delimiter
    let words = sentence.split(' ');

    // Iterate through each word in the sentence
    for (let word of words) {
        wordCount++;

        // Iterate through each character in the word
        for (let char of word) {
            charCount++;

            // Check if the character is a vowel
            if (['A', 'E', 'I', 'O', 'U'].includes(char.toUpperCase())) {
                vowelCount++;
            }
        }
    }

    // Check if the last character is a point
    if (sentence.endsWith('.')) {
        charCount--;
    }

    return {
        sentenceLength: charCount,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

let sentence = 'ABORT THE PLAN, MEET AT THE DARK CABIN.';
console.log(sentence)
console.log(processSentence(sentence));