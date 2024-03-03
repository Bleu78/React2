
function isPalindrome(word = 'racecar') {
    //The split('') method is used to split the input word into an array of characters.
    //The reverse() method is used to reverse the order of the elements in the array.
    //The join('') method is used to combine the elements in the array back into a single string.
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;   //The 'return' statement checks if the reversed word is the same as the original word. If they are the same, then the function returns true. Otherwise, it returns false.
}

console.log(isPalindrome); // function Type
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Big")); // false