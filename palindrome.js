
function isPalindrome(word = 'racecar') {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(isPalindrome); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Big")); // false